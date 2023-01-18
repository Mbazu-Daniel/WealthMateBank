const { ethers } = require("hardhat");

async function main() {
  
  // Calling the contracts
const WealthMate = await ethers.getContractFactory("WealthMate");

// Deploy the contract
const wealthMate = await WealthMate.deploy()

await wealthMate.deployed()


// print the contract address
console.log("WealthMate Bank deployed to: ", wealthMate.address);



  console.log("Sleeping.....");
  // Wait for polygonscan to notice that the contract has been deployed
  await sleep(10000);

  // Verify the WealthMate Bank  contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/WealthMate.sol:WealthMate",
    address: wealthMate.address,
    constructorArguments: [],
  });

}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
