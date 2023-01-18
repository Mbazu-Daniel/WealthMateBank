// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

/**
@author Mbazu Ifeanyichukwu Daniel
@dev Grandida bank

*/

contract WealthMate {
    using SafeMath for uint;

    // State Variables
    address public owner; // address of the owner of the bank

    // Mapping to store customer balances
    mapping(address => uint) public balances;

    // Events
    event Deposit(address indexed customerAddress, uint depositAmount); // emitted when a customer deposits tokens
    event Withdraw(
        address indexed customerAddress,
        uint withdrawAmount,
        uint newBalance
    ); // emitted when a customer withdraws tokens
    event Transfer(address from, address to, uint transferAmount); // emitted when a customer transfers tokens to another account

    // MODIFIERS
    modifier onlyOwner() {
        // modifier to restrict certain functions to only be callable by the owner of the bank
        require(msg.sender == owner, "You're not the owner of the bank");
        _;
    }


    // Constructor
    constructor() {
        owner = msg.sender; // set the owner of the bank to the address that deployed the contract
    }

    // Fallback and Receive function
    receive() external payable {} // allow the contract to receive ether

    fallback() external payable {} // allow the contract to receive tokens

    /// @dev Get balance of customer
    function getCustomerBalance() external view returns (uint) {
        // return the balance of the customer calling the function
        return balances[msg.sender];
    }

    /// @notice deposit token into the bank
    function depositToken() external payable {
        // you cannot deposit 0 amount
        require(msg.value != 0, "You don't have enough token to deposit");

        // Use SafeMath's add function to prevent overflow
        balances[msg.sender] = balances[msg.sender].add(msg.value);

        // log event of the deposit made
        emit Deposit(msg.sender, msg.value);
    }

    /// @dev customer withdraw token back to account
    function withdrawToken(
        address payable receiver,
        uint withdrawAmount
    ) external {
        // check that the customer has sufficient funds
        require(withdrawAmount <= balances[msg.sender], "insufficient funds");

        // Use SafeMath's sub function to prevent underflow
        balances[msg.sender] = balances[msg.sender].sub(withdrawAmount);

        // transfer token from the bankAddress to the customer
        receiver.transfer(withdrawAmount);

        // log event of the withdrawal made
        emit Withdraw(msg.sender, withdrawAmount, balances[msg.sender]);
    }

    /// @dev send token to another account from your bank balances
    function transferToken(
        address to,
        uint transferAmount
    ) external payable returns (bool) {
        // check that the customer has sufficient funds
        require(balances[msg.sender] >= transferAmount, "insufficient funds");

        // Use SafeMath's sub function to prevent underflow
        balances[msg.sender] = balances[msg.sender].sub(transferAmount);

        // transfer token from the bankAddress to the customer
        (bool success, ) = to.call{value: transferAmount}("");
        require(success, "Call failed");

        // add transferred amount to receivers account
        balances[to] = balances[to].add(transferAmount);

        // log event of the transfer made
        emit Transfer(msg.sender, to, transferAmount);
        return true;
    }
}
