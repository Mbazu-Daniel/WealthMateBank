import React from 'react'
import styles from '../constants/style'
import Feature from './Feature'
import service from "./services.module.css"

const Services = () => {
  return (
    <div className= {`${service.serviceSet}  ${styles.marginY} ${styles.padding} `}  id='services' > 
      <div className="flex items-center justify-center capitalize mb-10">
<h1 className='font-bold text-[30px] text-white' >What We Do</h1>
      </div>
      <div className='flex justify-evenly sm:flex-row  items-center flex-col '>
      <Feature title= "Deposit"  content="Our blockchain bank offers the option to easily deposit funds into your account from external sources such as traditional bank accounts or cryptocurrency wallets." />
      <Feature title= "Withdraw"  content="Our platform makes it convenient to withdraw funds from your blockchain bank account to your cryptocurrency wallets"/>
      <Feature title= "Transfer"  content="Our service allows you to seamlessly transfer funds between your own blockchain bank account or to accounts at other institutions."/>
      </div>
      </div>
  )
}


export default Services