import { BigNumber, Contract, ethers, providers, utils } from "ethers";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import styles from "../../style";
import Header from "../../components/Header";
import ConnectButton from "../../Bank-Component/ConnectButton";
import Footer from "../../components/Footer";
import Balances from "../../Bank-Component/Balances";
import { BANK_CONTRACT_ADDRESS , BANK_ABI} from "../../bank-constant/constants/index.js";

const Board = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [customerTotalBalance, setCustomerTotalBalance] = useState(null);
  const [inputValue, setInputValue] = useState({
    withdraw: "",
    deposit: "",
    transferAmount: "",
    transferAddress: "",
  });

  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
 
  const web3ModalRef = useRef();


  //   Customer Balance function
  const getCustomerBalances = async () => {
    try {
      const signer = await getProviderOrSigner(true);

      const bankContract = new Contract(
        BANK_CONTRACT_ADDRESS,
        BANK_ABI,
        signer
      );

      // Get the Customer balance by call the getCustomerBalance of the contract
      let balance = await bankContract.getCustomerBalance();
      console.log(balance)
      balance = utils.formatEther(balance)
    
      setCustomerTotalBalance(balance);
      console.log("Retrieved Balance: ", balance);
    
    } catch (error) {
      console.error(error);
    }
  };


const depositTokenHandler = async (event) => {
    try {
      event.preventDefault();

        
      const signer = await getProviderOrSigner(true);

        const bankContract = new Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, signer);
       
        // We convert the input value to wei
        let txn = await bankContract.depositToken({ value: utils.parseEther(inputValue.deposit),});
        console.log(`what is this ${customerTotalBalance}`);
        console.log('Depositing Token...')
        await txn.wait();
        console.log('Deposited Token...done', txn.hash)
        // After transaction is completed we call this function to update the balance of our account
        getCustomerBalances();
    } catch (error) {
      console.log(error);
    }
  }
const withdrawTokenHandler = async (event) => {
    try {
      event.preventDefault();

        
      const signer = await getProviderOrSigner(true);

        const bankContract = new Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, signer);

        let receiver = await signer.getAddress();
  let amount = utils.parseEther(inputValue.withdraw)
        // We convert the input value to wei
        let txn = await bankContract.withdrawToken(receiver, amount);

        console.log('Withdrawing Token...')
        await txn.wait();
        console.log('Withdraw Token...done', txn.hash)
       
        getCustomerBalances();
    } catch (error) {
      console.log(error);
    }
  }

const transferTokenHandler = async (event) => {
    try {
      event.preventDefault();

        
      const signer = await getProviderOrSigner(true);

        const bankContract = new Contract(BANK_CONTRACT_ADDRESS, BANK_ABI, signer);

        // let receiver = await signer.getAddress();
        let receiver = inputValue.transferAddress 
        

let amount = utils.parseEther(inputValue.transferAmount)

      // check that its a valid ethereum address 

      if (!/^(0x)?[0-9a-f]{40}$/i.test(receiver)) {
        throw new Error("Invalid Ethereum address");
      }
      

        // We convert the input value to wei
        let txn = await bankContract.transferToken(receiver,amount);

        console.log('Transfering Token...')
        await txn.wait();
        console.log('Transfer Token...done', txn.hash)
       
        getCustomerBalances();
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (event) => {
    setInputValue((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    

    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Polygon Mumbai");
      throw new Error("Change the network to Polygon Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };
  /*
        connectWallet: Connects the MetaMask wallet
      */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true); 
      getCustomerBalances()

      console.log("wallet connected");
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!walletConnected) {
      web3ModalRef.current = new Web3Modal({
        network: "mumbai",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();
      
      
      
    }   

   
  }, [walletConnected]);

  return (
    <div className=" bg-gray-300 text-primary  dark:text-white dark:bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Header
            props={
              <ConnectButton
                walletConnected={walletConnected}
                connectWallet={connectWallet}
              />
            }
          />
        </div>
      </div>

      <div
        className={`bg-gray-300  max-w-3xl sm:mt-14 mx-auto  sm:rounded-xl dark:bg-primary  border-2 border-pink-500`}
      >
        <div className={`px-10 pt-5  pb-10`}>

          <header className="App-header">
            {walletConnected ? (
              <div>


<Balances customerTotalBalance={customerTotalBalance}/>






                
                <div className="mx-auto">
      <form className="flex flex-wrap">
        {/* DEPOSIT SECTION */}
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <div className="bg-gray-100 rounded-lg shadow-lg p-5">
            <h4 className="text-primary text-lg font-bold">Deposit </h4>
            <input
              id="deposit-amount"
              type="text"
              className="text-primary block w-full rounded-lg shadow-inner p-3"
              placeholder="Enter deposit amount"
              onChange={handleInputChange}
              value={inputValue.deposit}
              name="deposit"
              
            />
            <button
              id="deposit-btn"
              className="block w-full rounded-lg shadow-inner bg-primary text-white font-bold py-3 px-4 mt-4"
              onClick={depositTokenHandler}
                   >
              Deposit
            </button>
          </div>
        </div>

        {/* WITHDRAW SECTION */}
        <div className="w-full md:w-1/2 px-3">
          <div className="bg-gray-100 rounded-lg shadow-lg p-5">
            <h4 className="text-primary text-lg font-bold ">Withdraw </h4>
            <input
              id="withdraw-amount"
              type="text"
              className="text-primary block w-full rounded-lg shadow-inner p-3"
              placeholder="Enter withdraw amount"
              onChange={handleInputChange}
              value={inputValue.withdraw}
              name="withdraw"
            />
            <button
              id="withdraw-btn"
              className="block w-full rounded-lg shadow-inner bg-primary text-white font-bold py-3 px-4 mt-4"
              onClick={withdrawTokenHandler}
            >
              Withdraw
            </button>
          </div>
        </div>

        {/* TRANSFER SECTION */}

        <div className="w-full mt-5 px-3">
          <div className="bg-gray-100 rounded-lg shadow-lg p-5">
            <h4 className="text-primary text-lg font-bold">Transfer</h4>

            {/* TRANSFER AMOUNT */}
         <div>
         <input
              id="transfer-amount"
              type="text"
              className="block w-full rounded-lg mb-3 shadow-inner p-3 text-primary"
              placeholder="Enter transfer amount"
              onChange={handleInputChange}
              value={inputValue.transferAmount}
              name="transferAmount"
            />
         </div>

           <div>
           <input
              id="transfer-address"
              type="text"
              className="block w-full rounded-lg shadow-inner p-3 text-primary"
              placeholder="Enter transfer address"
              onChange={handleInputChange}
              value={inputValue.transferAddress}
              name="transferAddress"
            />
           </div>
            <button
              id="transfer-btn"
              className="block w-full rounded-lg shadow-inner bg-primary text-white font-bold py-3 px-4 mt-4"
              onClick={transferTokenHandler}
            >
              Transfer
            </button>
          </div>
        </div>
        
      </form>
    </div>

              </div>
            ) : (
              <div>
                <p>You are not connected</p>
                <button onClick={connectWallet} className="btn btn-primary">
                  Connect Metamask
                </button>
              </div>
            )}
          </header>
        </div>
      </div>
      <div
        className={`dark:bg-primary bg-gray-300  ${styles.paddingX} ${styles.flexStart}`}
      >
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Board;
