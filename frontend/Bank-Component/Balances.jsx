import React, {useState} from "react";

const Balances = (props) => {


  return (
    <div>
      <h2
        className="p-2 items-center  sm:text-left text-4xl sm:py-5 border-b-2  font-bold sm:px-10   text-primary border-pink-500    dark:text-white mb-6 md:mb-0
        
        "
      >
        Bank Dashboard
      </h2>

      <div className="flex flex-col md:flex-row md:items-center md:justify-start px-4 py-6 border-gray-300 dark:border-primary ">
        <div className="w-full mb-6 md:mb-0">
          <div className=" bg-primary dark:bg-gray-300 rounded-lg p-4 text-center mx-auto ">
            <h5 className="text-2xl  font-poppins font-bold tracking-wide text-white dark:text-primary ">
              Customer Balance
            </h5>
                          <h2 className="text-xl font-normal dark:text-primary text-white  "> {props.customerTotalBalance} Matic </h2>
          </div>
        </div>

        {/* <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <div className="bg-primary dark:bg-gray-300 rounded-lg p-4 text-center mx-auto">
            <h5 className="text-2xl  font-poppins font-bold tracking-wide text-white dark:text-primary">
              Wallet Address
            </h5>
            <h2 className="text-xl font-normal dark:text-primary text-white  "> x0000000 </h2>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Balances;
