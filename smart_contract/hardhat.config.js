

require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
require("@nomiclabs/hardhat-ethers");

/** @type import('hardhat/config').HardhatUserConfig */
const API_PRIVATE_KEY = process.env.REACT_APP_METAMASK_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.17",
  networks:{
    goreli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/gpnyoV1DNyxThKqYb0aKiT3vBmxp3kca',
      accounts: [`0x${API_PRIVATE_KEY}`]
    }
  }
};