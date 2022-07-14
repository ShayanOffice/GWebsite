require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();
const { API_KEY, RPC_NODE_URL, ACCOUNT_PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  // defaultNetwork: "ropsten",
  networks: {
    hardhat: {},
    rinkeby: {
      url: RPC_NODE_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
    ethereum: {
      chainId: 1,
      url: RPC_NODE_URL,
      accounts: [ACCOUNT_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: API_KEY,
  },
};
