import React, { useState } from "react";
import Image from "next/image";
import { navLinks } from "../constants/index";
import { close, logo, menu, bank } from "../public/assets";
import Header from "./Header";
import Menu from "./Menu";


const Navbar = () => {
return(
  <Header props={<Menu/>}/>
)
  
}
export default Navbar;
