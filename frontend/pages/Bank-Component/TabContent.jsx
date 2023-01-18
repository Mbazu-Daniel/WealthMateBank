import React, { useState } from "react";
import tab from "./tabs.module.css";
const TabContent = (props) => {
  return (
    <div className="mx-auto">
      <form className="flex flex-wrap">
        {/* DEPOSIT SECTION */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-lg p-5"
          onSubmit={e => props.depositTokens(e, props.symbol)}>
            <h4 className="text-primary text-lg font-bold">Deposit </h4>
            <input
              id="deposit-amount"
              type="text"
              className="text-primary block w-full rounded-lg shadow-inner p-3"
              placeholder="Enter deposit amount"
              onChange={e => props.setAmount(e.target.value)}
            />
            <button
              id="deposit-btn"
              className="block w-full rounded-lg shadow-inner bg-primary text-white font-bold py-3 px-4 mt-4"
                          >
              Deposit
            </button>
          </div>
        </div>

        {/* WITHDRAW SECTION */}
        <div className="w-full md:w-1/2 px-3">
          <div className="bg-gray-100 rounded-lg shadow-lg p-5"
           onSubmit={e => props.withdrawTokens(e, props.symbol)}>
            <h4 className="text-primary text-lg font-bold ">Withdraw </h4>
            <input
              id="withdraw-amount"
              type="text"
              className="text-primary block w-full rounded-lg shadow-inner p-3"
              placeholder="Enter withdraw amount"
            />
            <button
              id="withdraw-btn"
              className="block w-full rounded-lg shadow-inner bg-primary text-white font-bold py-3 px-4 mt-4"
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* TRANSFER SECTION */}

        <div className="w-full mt-5 px-3">
          <div className="bg-gray-100 rounded-lg shadow-lg p-5">
            <h4 className="text-primary text-lg font-bold">Transfer</h4>
            <input
              id="transfer-amount"
              type="text"
              className="block w-full rounded-lg mb-3 shadow-inner p-3 text-primary"
              placeholder="Enter transfer amount"
            />
            <input
              id="transfer-address"
              type="text"
              className="block w-full rounded-lg shadow-inner p-3 text-primary"
              placeholder="Enter transfer address"
            />
            <button
              id="transfer-btn"
              className="block w-full rounded-lg shadow-inner bg-primary text-white font-bold py-3 px-4 mt-4"
            >
              Transfer
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
};

export default TabContent;
