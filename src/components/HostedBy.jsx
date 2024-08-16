import React from 'react'
import BruceImg from "../assets/images/bruce.png"

import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { FaEarthEurope } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaPhone } from "react-icons/fa";

const HostedBy = () => {
  return (
    <div className="border border-[#cacaca] p-4 mt-3">
        <h3 className="text-2xl">Hosted By</h3>
        <div className="flex gap-2">
            <img className="rounded-full" width="30px" src={BruceImg}/>
            <h3>Yashdeep Patwa</h3>
        </div>
        <p>
        This is the description of the organiser. You can get to know more about the organiser here.
        </p>
        <h3>Contect us on</h3>
        <div className="flex gap-2">
            <RiFacebookCircleFill/>
            <RiTwitterXFill/>
            <GrLinkedin/>
            <FaEarthEurope/>
            <CgMail/>
            <FaPhone/>
        </div>
    </div>
  )
}

export default HostedBy
