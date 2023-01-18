import React from 'react'
import Header from '../components/Header'
import ConnectButton from './ConnectButton'

const BankNavbar = () => {
  return (
   <Header props={<ConnectButton/>} />
  )
}

export default BankNavbar