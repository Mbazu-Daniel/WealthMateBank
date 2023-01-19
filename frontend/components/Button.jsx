import React from 'react'
import Link from 'next/link'

const Button = ({styles}) => {
  return (
    <Link href="/bank/dashboard"> <button type='button' className={`py-4 px-6 box__gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-[10px]` }>Get Started</button> </Link>
  )
}

export default Button