const ethers = require('ethers');

// Create a BigNumber object with a valid value property
const value = new ethers.BigNumber.from(10);

// Use the formatEther function to format the value as an ether value
const etherValue = ethers.utils.formatEther(value);

console.log(`Ether value: ${etherValue}`);
