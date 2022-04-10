require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

let ALCHEMY_API_KEY_URL = process.env.ALCHEMY_API_KEY_URL;

let RINKEBY_PRIVATE_KEY = process.env.RINKEBY_PRIVATE_KEY;

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: ALCHEMY_API_KEY_URL,
      accounts: [RINKEBY_PRIVATE_KEY],
    },
  },
};