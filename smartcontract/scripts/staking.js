const { ethers } = require("hardhat");

async function main() {
  
  // Calling the contracts
const Staking = await ethers.getContractFactory("Staking");

// Deploy the contract
const staking = await Staking.deploy()

await staking.deployed()


// print the contract address
console.log("Staking Bank deployed to: ", staking.address);



  console.log("Sleeping.....");
  // Wait for polygonscan to notice that the contract has been deployed
  await sleep(10000);

  // Verify the Staking Bank  contract after deploying
  await hre.run("verify:verify", {
    contract: "contracts/Staking.sol:Staking",
    address: staking.address,
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
