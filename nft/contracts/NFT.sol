// SPDX-License-Identifier: GPL-3.0

// Amended by BOOMHUNK

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract NFT is ERC721Enumerable, ERC721URIStorage, Ownable {
    using Strings for uint256;
    using Counters for Counters.Counter;

    Counters.Counter private supply;

    string public baseURI;
    string public uriSuffix = ".json";
    string public hiddenMetadataUri;

    uint256 public cost = 0.1 ether;
    uint32 public maxSupply = 10;
    uint32 public maxTxMintAmount = 20;
    uint32 public nftPerAddressLimit = 1;

    bool public revealed = false;
    bool public paused = true;

    bool public onlyWhitelisted = true;
    address[] public whitelistedAddresses;

    mapping(address => uint32[]) public walletTokens;

    constructor(
        string memory _name,
        string memory _sym,
        string memory _initBaseURI,
        string memory _initHiddenMetadataUri
    ) ERC721(_name, _sym) {
        setBaseURI(_initBaseURI);
        setHiddenMetadataUri(_initHiddenMetadataUri);
        // console.log("NotRevealed URI is: %o", notRevealedUri);
    }

    modifier pausedCompilance() {
        require(paused == false, "Minting is not open");
        _;
    }

    modifier mintCompliance(uint32 _mintAmount) {
        require(
            _mintAmount > 0 && _mintAmount <= maxTxMintAmount,
            "Invalid mint amount!"
        );
        require(
            supply.current() + _mintAmount <= maxSupply,
            "Max supply exceeded!"
        );
        _;
    }

    modifier whiteListCompilance(uint32 _mintAmount) {
        if (tx.origin != owner()) {
            if (onlyWhitelisted == true) {
                require(isWhitelisted(tx.origin), "user is not whitelisted");
                uint256 ownerMintedCount = walletTokens[tx.origin].length;
                require(
                    ownerMintedCount + _mintAmount <= nftPerAddressLimit,
                    "max NFT per address exceeded"
                );
            }
            require(msg.value >= cost * _mintAmount, "insufficient funds");
        }
        _;
    }

    // internal
    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    // public

    function getWalletTokens(address addr)
        public
        view
        returns (uint32[] memory)
    {
        return walletTokens[addr];
    }

    function mint(uint32 _mintAmount)
        public
        payable
        pausedCompilance
        mintCompliance(_mintAmount)
        whiteListCompilance(_mintAmount)
    {
        _mintLoop(tx.origin, _mintAmount);
    }

    function _mintLoop(address _receiver, uint32 _mintAmount) internal {
        for (uint32 i = 0; i < _mintAmount; i++) {
            supply.increment();
            uint256 supp = supply.current();
            walletTokens[_receiver].push(uint32(supp));
            _safeMint(_receiver, supp);
        }
    }

    function isWhitelisted(address _user) public view returns (bool) {
        for (uint i = 0; i < whitelistedAddresses.length; i++) {
            if (whitelistedAddresses[i] == _user) {
                return true;
            }
        }
        return false;
    }

    function walletOfOwner(address _owner)
        public
        view
        returns (uint256[] memory)
    {
        uint256 ownerTokenCount = balanceOf(_owner);
        uint256[] memory tokenIds = new uint256[](ownerTokenCount);
        for (uint256 i; i < ownerTokenCount; i++) {
            tokenIds[i] = tokenOfOwnerByIndex(_owner, i);
        }
        return tokenIds;
    }

    function tokenURI(uint256 tokenId)
        public
        view
        virtual
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        require(_exists(tokenId), "URI query for nonexistent token");

        if (revealed == false) {
            return hiddenMetadataUri;
        }

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(
                    abi.encodePacked(
                        currentBaseURI,
                        tokenId.toString(),
                        uriSuffix
                    )
                )
                : "";
    }

    // The following functions are overrides required by Solidity.
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) pausedCompilance {
        super._beforeTokenTransfer(from, to, tokenId);
    }

    function _burn(uint256 tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);
    }

    function _afterTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721) {
        super._afterTokenTransfer(from, to, tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    //only owner
    function updateMeta(uint32 tokenId, string memory _tokenURI)
        public
        onlyOwner
    {
        require(_exists(tokenId));
        _setTokenURI(tokenId, _tokenURI);
    }

    function reveal(bool _state) public onlyOwner {
        revealed = _state;
    }

    function pause(bool _state) public onlyOwner {
        paused = _state;
    }

    function setNftPerAddressLimit(uint32 _limit) public onlyOwner {
        nftPerAddressLimit = _limit;
    }

    function setCost(uint256 _newCost) public onlyOwner {
        cost = _newCost;
    }

    function setmaxMintAmount(uint32 _newmaxMintAmount) public onlyOwner {
        maxTxMintAmount = _newmaxMintAmount;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function setUriSuffix(string memory _newUriSuffix) public onlyOwner {
        uriSuffix = _newUriSuffix;
    }

    function setHiddenMetadataUri(string memory _notRevealedURI)
        public
        onlyOwner
    {
        hiddenMetadataUri = _notRevealedURI;
    }

    function setOnlyWhitelisted(bool _state) public onlyOwner {
        onlyWhitelisted = _state;
    }

    function whitelistUsers(address[] calldata _users) public onlyOwner {
        delete whitelistedAddresses;
        whitelistedAddresses = _users;
    }

    function withdraw() public payable onlyOwner {
        (bool os, ) = payable(owner()).call{value: address(this).balance}("");
        require(os);
    }
}
