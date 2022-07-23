const { expect } = require("chai");
const {
  test,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");

// Hidden MetaData:   ipfs://bafybeieph4uteygcipvr66h4ee4z3nhz36yfjjlm3wmg6dqkpmvu5gavxu/Egg.json
// 1st Stage Base:    ipfs://bafybeidjw3q5v4nergdl3idudmjfuvuc5acvzfopfsycor4e52l6kixyae
// 2nd Stage Base:    ipfs://bafybeictjmcdb565xguhhjaci6vp2icmgjbdocbp435h4upz46gwrexybi

describe("NFT contract", function () {
  async function deployNFTFixture() {
    const NFT = await ethers.getContractFactory("NFT");
    const [owner, addr1, addr2, addr3] = await ethers.getSigners();

    const nft = await NFT.deploy(
      "TestNFT",
      "TST",
      "ipfs://bafybeidjw3q5v4nergdl3idudmjfuvuc5acvzfopfsycor4e52l6kixyae",
      "ipfs://bafybeieph4uteygcipvr66h4ee4z3nhz36yfjjlm3wmg6dqkpmvu5gavxu/Egg.json"
    );

    await nft.deployed();

    return { nft, owner, addr1, addr2, addr3 };
  }

  describe("Deployment", function () {
    it("Should set the hiddenMetadataUri", async function () {
      const { nft, owner } = await loadFixture(deployNFTFixture);
      // console.log("thaaaa url is: ", await nft.notRevealedUri());
      expect(await nft.hiddenMetadataUri()).to.equal(
        "ipfs://bafybeieph4uteygcipvr66h4ee4z3nhz36yfjjlm3wmg6dqkpmvu5gavxu/Egg.json"
      );
    });
    it("Should set the baseURI", async function () {
      const { nft, owner } = await loadFixture(deployNFTFixture);
      expect(await nft.baseURI()).to.equal(
        "ipfs://bafybeidjw3q5v4nergdl3idudmjfuvuc5acvzfopfsycor4e52l6kixyae"
      );
    });
  });

  describe("Minting", function () {
    it("Should get Mint paused error", async function () {
      const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
        deployNFTFixture
      );
      await expect(nft.connect(addr1).mint(3)).to.be.revertedWith(
        "Minting is not open"
      );
    });

    it("Should get max mint amount exeeded error", async function () {
      const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
        deployNFTFixture
      );
      await nft.pause(false);
      await nft.whitelistUsers(["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]);
      await expect(nft.connect(addr1).mint(40)).to.be.revertedWith(
        'Invalid mint amount!'
      );
    });

    it("Should get supply limit exceeded error", async function () {
      const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
        deployNFTFixture
      );
      await nft.pause(false);
      await expect(nft.connect(addr1).mint(12)).to.be.revertedWith(
        'Max supply exceeded!'
      );
    });

    // it("Should get whitelist error", async function () {
    //   const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
    //     deployNFTFixture
    //   );
    //   await nft.pause(false);

    //   await expect(nft.connect(addr1).mint(1)).to.be.revertedWith(
    //     "user is not whitelisted"
    //   );
    // });

    // it("Should get max NFT per address exceeded error", async function () {
    //   const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
    //     deployNFTFixture
    //   );
    //   await nft.pause(false);
    //   await nft.whitelistUsers(["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]);
    //   await expect(nft.connect(addr1).mint(2)).to.be.revertedWith(
    //     "max NFT per address exceeded"
    //   );
    // });

    // it("Should get max NFT per address exceeded error after 1 mint", async function () {
    //   const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
    //     deployNFTFixture
    //   );
    //   await nft.pause(false);

    //   await nft.whitelistUsers(["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]);
    //   await nft.connect(addr1).mint(1);
    //   await expect(nft.connect(addr1).mint(1)).to.be.revertedWith(
    //     "max NFT per address exceeded"
    //   );
    // });

    it("User should get the nft after mint", async function () {
      const { nft, owner, addr1, addr2, addr3 } = await loadFixture(
        deployNFTFixture
      );
      await nft.pause(false);
      await nft.whitelistUsers(["0x70997970C51812dc3A010C7d01b50e0d17dc79C8"]);
      await nft.connect(addr1).mint(1, { value: ethers.utils.parseEther("0.1") });
      expect(
        await nft.mintedWalletsBalances(
          "0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
        )
      ).to.equal(1);
    });
  });

  // describe("Transactions", function () {
  //   it("Should transfer tokens between accounts", async function () {
  //     const { nft, owner, addr1, addr2 } = await loadFixture(
  //       deployNFTFixture
  //     );
  //     // Transfer 50 tokens from owner to addr1
  //     await expect(
  //       nft.transfer(addr1.address, 50)
  //     ).to.changeTokenBalances(nft, [owner, addr1], [-50, 50]);

  //     // Transfer 50 tokens from addr1 to addr2
  //     // We use .connect(signer) to send a transaction from another account
  //     await expect(
  //       nft.connect(addr1).transfer(addr2.address, 50)
  //     ).to.changeTokenBalances(nft, [addr1, addr2], [-50, 50]);
  //   });

  //     it("should emit Transfer events", async function () {
  //       const { nft, owner, addr1, addr2 } = await loadFixture(
  //         deployNFTFixture
  //       );

  //       // Transfer 50 tokens from owner to addr1
  //       await expect(nft.transfer(addr1.address, 50))
  //         .to.emit(nft, "Transfer")
  //         .withArgs(owner.address, addr1.address, 50);

  //       // Transfer 50 tokens from addr1 to addr2
  //       // We use .connect(signer) to send a transaction from another account
  //       await expect(nft.connect(addr1).transfer(addr2.address, 50))
  //         .to.emit(nft, "Transfer")
  //         .withArgs(addr1.address, addr2.address, 50);
  //     });

  //     it("Should fail if sender doesn't have enough tokens", async function () {
  //       const { nft, owner, addr1 } = await loadFixture(
  //         deployNFTFixture
  //       );
  //       const initialOwnerBalance = await nft.balanceOf(owner.address);

  //       // Try to send 1 nft from addr1 (0 tokens) to owner (1000 tokens).
  //       // `require` will evaluate false and revert the transaction.
  //       await expect(
  //         nft.connect(addr1).transfer(owner.address, 1)
  //       ).to.be.revertedWith("Not enough tokens");

  //       // Owner balance shouldn't have changed.
  //       expect(await nft.balanceOf(owner.address)).to.equal(
  //         initialOwnerBalance
  //       );
  //     });
  // });
});
