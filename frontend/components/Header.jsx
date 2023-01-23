import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../constants/index";
import { close, logo, grandida, menu, bank } from "../public/assets";

const Header = ({props}) => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
        <Image src={bank} alt="WealthMate Bank" className="w-[266px] h-[72px] object-contain " />

{props}
        </nav>
  )
}

export default Header