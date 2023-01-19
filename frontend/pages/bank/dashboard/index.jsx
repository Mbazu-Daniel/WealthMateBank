// import { Contract, providers } from "ethers";
// import React, { useEffect, useRef, useState } from "react";
// import Web3Modal from "web3modal";
// import ConnectButton from "../../Bank-Component/ConnectButton";
// import Footer from "../../components/Footer";
// import Header from "../../components/Header";
// import styles from "../../style";
// import Modal from "../../../Bank-Component/Modal";

// import Tabs from "../../Bank-Component/Tabs";

// // token abi
// import maticArtifact from "../../bank-constant/client/Matic.json";
// import shibArtifact from "../../bank-constant/client/Shib.json";
// import usdtArtifact from "../../bank-constant/client/Usdt.json";

// const CONTRACT_ADDRESS = "0x3b1fbbC5B78F0aC949b85C7eeFF06A8759737Ef6"

// function Index() {
//   // General
//   const [provider, setProvider] = useState(undefined);
//   const [signer, setSigner] = useState(undefined);
//   const [signerAddress, setSignerAddress] = useState(undefined);
//   const [bankContract, setBankContract] = useState(undefined);
//   const [tokenContracts, setTokenContracts] = useState({});

  
//   const [tokenBalances, setTokenBalances] = useState({});
//   const [tokenSymbols, setTokenSymbols] = useState([]);

//   const [amount, setAmount] = useState(0);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedSymbol, setSelectedSymbol] = useState(undefined);
//   const [isDeposit, setIsDeposit] = useState(true);



//   // New stuff
//   // walletConnected keep track of whether the user's wallet is connected or not
//   const [walletConnected, setWalletConnected] = useState(false);

//       // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
//   const web3ModalRef = useRef();

  

//   const getProviderOrSigner = async (needSigner = false) => {
//     // Connect to Metamask
//     // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
//     const provider = await web3ModalRef.current.connect();
//     const web3Provider = new providers.Web3Provider(provider);

//     if (needSigner) {
//       const signer = web3Provider.getSigner();
//       return signer;
//     }
//     return web3Provider;
//   };

//   /*
//     connectWallet: Connects the MetaMask wallet
//   */

//     const connectWallet = async () => {
//       try {
//          // Get the provider from web3Modal, which in our case is MetaMask
//       // When used for the first time, it prompts the user to connect their wallet
//       await getProviderOrSigner();
//       setWalletConnected(true);
//       } catch (err) {
//         console.error(err);
//       }
//     }

    


//     useEffect(() => {
//       if (!walletConnected) {
//         web3ModalRef.current = new Web3Modal({
//           network: "mumbai",
//           providerOptions: {},
//           disableInjectedProvider: false,
          
//         });
//         connectWallet();
//         console.log('wallet connected')
//         console.log(maticArtifact);
//       }
      
//     }, [walletConnected])


//   return (
//     <div className=" bg-gray-300 text-primary  dark:text-white dark:bg-primary w-full overflow-hidden">
//       <div className={`${styles.paddingX} ${styles.flexCenter}`}>
//         <div className={`${styles.boxWidth}`}>
//           <Header props={<ConnectButton
//             walletConnected={walletConnected}
//             connectWallet={connectWallet}
//           />} />
//         </div>
//       </div>

//       <div
//         className={` bg-gray-300  max-w-3xl sm:mt-14 mx-auto  sm:rounded-xl dark:bg-primary  border-2 border-pink-500`}
//       >
//         <div className={`px-10 pt-5  pb-10`}>
//           {/* <Balances  /> */}

//           {/* <Tabs /> */}

//           <header className="App-header">
//         {walletConnected ? (
          
//             <div>
              
//               <Tabs/>


// <Modal

// showModal={showModal}
// setShowModal={setShowModal}
// />
//             </div>
         
//         ) : (
//           <div>
//             <p>
//               You are not connected
//             </p>
//             <button onClick={connectWallet} className="btn btn-primary">Connect Metamask</button>
//           </div>
//         )}
//       </header>
          



//         </div>
//       </div>
//       <div
//         className={`dark:bg-primary bg-gray-300  ${styles.paddingX} ${styles.flexStart}`}
//       >
//         <div className={`${styles.boxWidth}`}>
//           <Footer />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Index;
