import React from 'react'
import { Link } from 'react-router-dom'
import { VscAccount } from "react-icons/vsc";
import KonfhubLogo from "../assets/images/konfhub_logo.svg"


const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-7 bg-[#f8f9fa]">
      <img src={KonfhubLogo} />
      <Link to="/login">
        <VscAccount size={30}/>
      </Link>
    </div>
  )
}

export default Navbar
