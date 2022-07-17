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
    it("Should set the notRevealedUri", async function () {
      const { nft, owner } = await loadFixture(deployNFTFixture);
      // const notRevealedUri = await nft.notRevealedUri;
      console.log("thaaaa url is: ", await nft.notRevealedUri());
      expect(await nft.notRevealedUri()).to.equal(
        "ipfs://bafybeieph4uteygcipvr66h4ee4z3nhz36yfjjlm3wmg6dqkpmvu5gavxu/Egg.json"
      );
    });

    // it("Should assign the total supply of tokens to the owner", async function () {
    //   const { nft, owner } = await loadFixture(deployNFTFixture);
    //   const ownerBalance = await nft.balanceOf(owner.address);
    //   expect(await nft.totalSupply()).to.equal(ownerBalance);
    // });
  });

  //   describe("Transactions", function () {
  //     it("Should transfer tokens between accounts", async function () {
  //       const { nft, owner, addr1, addr2 } = await loadFixture(
  //         deployTokenFixture
  //       );
  //       // Transfer 50 tokens from owner to addr1
  //       await expect(
  //         nft.transfer(addr1.address, 50)
  //       ).to.changeTokenBalances(nft, [owner, addr1], [-50, 50]);

  //       // Transfer 50 tokens from addr1 to addr2
  //       // We use .connect(signer) to send a transaction from another account
  //       await expect(
  //         nft.connect(addr1).transfer(addr2.address, 50)
  //       ).to.changeTokenBalances(nft, [addr1, addr2], [-50, 50]);
  //     });

  //     it("should emit Transfer events", async function () {
  //       const { nft, owner, addr1, addr2 } = await loadFixture(
  //         deployTokenFixture
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
  //         deployTokenFixture
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
  //   });
});
