import React from 'react'

const ConnectButton = (props) => {
  return (
   <>
    
    {props.walletConnected ? (
      <div>
      <button className="text-sm focus:outline-none bg-green-900 rounded-full cursor-pointer p-5">
        Wallet Connected 
      </button>
    </div>
    ) : (
      <button
        onClick={() => props.connectWallet()}
        className="text-sm focus:outline-none bg-red-900 rounded-full cursor-pointer p-5"
      >
        Connect Wallet 🔑
      </button>
    )
  
  
  }
   
   </>
  )
}

export default ConnectButton


