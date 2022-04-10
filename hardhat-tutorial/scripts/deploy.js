
const { ethers } = require("hardhat");

async function main() {
  const whitelistContract = await ethers.getContractFactory("Whitelist");

 
  const deployedWhitelistContract = await whitelistContract.deploy(15);
  
  // Wait for it to finish deploying
  await deployedWhitelistContract.deployed();

  // print the address of the deployed contract
  console.log(
    "Whitelist Contract Address:",
    deployedWhitelistContract.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
