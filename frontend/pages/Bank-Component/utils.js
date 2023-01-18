const toBytes32 = (text) => ethers.utils.formatBytes32String(text);
const toString = (bytes32) => ethers.utils.parseBytes32String(bytes32);
const toWei = (ether) => ethers.utils.parseEther(ether);
const toEther = (wei) => ethers.utils.formatEther(wei).toString();
const toRound = (num) => Number(num).toFixed(2);

export { toBytes32, toString, toWei, toEther, toRound };
