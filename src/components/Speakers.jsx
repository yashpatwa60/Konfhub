import React from 'react'
import BruceImg from "../assets/images/bruce.png"
import DarkKinghtImg from "../assets/images/dark_knight.png"

import { RiFacebookCircleFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { GrLinkedin } from "react-icons/gr";
import { FaEarthEurope } from "react-icons/fa6";

const Speakers = () => {
  return (
    <div className="ml-16 mt-7">
      <h3 id="speakers" className="font-bold text-2xl">THIS IS SPEAKERS SECTION</h3>
      <h4 className="mt-3 mb-3">This is the description for speakers section.</h4>

        <div className="flex gap-4">
       <div className="ml-4 w-[340px] h-[210px] border-2 border-black">
        <div className="flex gap-2 justify-center align-center p-3">
            <div>
                <img height="100px" width="300px"  src={BruceImg}></img>
            </div>
            <div className="w-[200px]">
                <h3 className="font-bold">Bruce Wayne</h3>
                <h3>Chairman</h3>
                <h3>Wayne Enterprises</h3>
                <div className="mt-4 flex gap-2">
                    <RiFacebookCircleFill/>
                    <RiTwitterXFill/>
                    <GrLinkedin/>
                    <FaEarthEurope/>
                </div>
            </div>
        </div>
      </div>

       <div className="ml-4 w-[340px] h-[210px] border-2 border-black">
        <div className="flex gap-2 justify-center align-center p-3">
            <div>
                <img height="100px" width="300px" src={DarkKinghtImg}></img>
            </div>
            <div className="w-[200px]">
                <h3 className="font-bold">Dark Night</h3>
                <h3>Batman</h3>
                <h3>Gotham</h3>
                <div className="mt-4 flex gap-2">
                    <RiFacebookCircleFill/>
                    <RiTwitterXFill/>
                    <GrLinkedin/>
                    <FaEarthEurope/>
                </div>
            </div>
        </div>
      </div> 
      </div>
    </div>
  )
}

export default Speakers
