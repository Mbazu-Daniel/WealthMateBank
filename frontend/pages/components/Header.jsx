import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../constants/index";
import { close, logo, grandida, menu, bank } from "../../public/assets";

const Header = ({props}) => {

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar ">
        <Image src={bank} alt="Grandida Bank" className="w-[75px] " />

{props}
        </nav>
  )
}

export default Header