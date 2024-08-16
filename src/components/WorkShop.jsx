import React from 'react'
import Image1 from "../assets/images/image1.webp"
import Image2 from "../assets/images/image2.webp"
import Image3 from "../assets/images/image3.webp"
import { SlCalender } from "react-icons/sl";
import BruceImg from "../assets/images/bruce.png"
import DarkKnightImg from "../assets/images/dark_knight.png"

const WorkShop = () => {
  return (
    // 1st workshop 
    <div id="workshop" className="ml-10">
      <h3 className="mt-6"> THIS IS WORKSHOP SECTION</h3>
      <h4 className="my-3">This is the description for workshop sections.</h4>

    <div className="flex gap-4">
      <div className="w-[300px] border border-[#cacaca] rounded p-4">
        <div>
            <img width="250px" src={Image1} />
        </div>
        <div>
            <h3 className="my-3 text-2xl font-semibold">How to make more money</h3>
            <div className="flex gap-2 items-center">
               <SlCalender />
                <h2>Jun 11th, 2024 at 10:00 AM (IST)</h2>

            </div>
            <div className="flex justify-between mt-3 ">
                <img className="rounded-full" width="52px" src={BruceImg}/>
                <button className="px-4 py-3 bg-black text-white">View Details</button>
            </div>
        </div>
      </div>

       {/* 2nd workshop */}
       <div className="w-[300px] border border-[#cacaca] rounded p-4">
        <div>
            <img width="250px" src={Image2} />
        </div>
        <div>
            <h3 className="my-3 text-2xl font-semibold">How to fight crime</h3>
            <div className="flex gap-2 items-center">
               <SlCalender />
                <h2>Jun 1st, 2034 at 10:00 AM (IST)</h2>

            </div>
            <div className="flex justify-between mt-3 ">
                <img className="rounded-full" width="52px" src={DarkKnightImg}/>
                <button className="px-4 py-3 bg-black text-white">View Details</button>
            </div>
        </div>
      </div>

      {/* 3rd workshop */}
      <div className="w-[300px] border border-[#cacaca] rounded p-4">
        <div>
            <img width="250px" src={Image3} />
        </div>
        <div>
            <h3 className="my-3 text-2xl font-semibold">This is a workshop connected to a ticket</h3>
            <div className="flex gap-2 items-center">
               <SlCalender />
                <h2>Jun 1st, 2034 at 10:00 AM (IST)</h2>

            </div>
            <div className="flex justify-between mt-3 ">
                <img className="rounded-full" width="52" src={DarkKnightImg}/>
                <button className="px-4 py-3 bg-black text-white">View Details</button>
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WorkShop
