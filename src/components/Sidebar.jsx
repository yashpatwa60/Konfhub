import React from 'react'
import { FaVideo } from "react-icons/fa6";
import { MdPaid } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import Countdown from 'react-countdown';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    return <span>{days}D :{hours}H:{minutes}M:{seconds}S</span>;
};

const Sidebar = () => {
  return (
    <>
    <div className="p-5 mr-4 rounded border border-[#cacaca] w-92 h-90">
         <h1 className="font-bold text-2xl">KonfHub Frontend <br></br>Evaluation Task</h1>
    <div className="flex justify-between p-2">
        <div className="flex items-center"><FaVideo /> <h3 className="ml-1">Online</h3></div>
        <div className="flex items-center"><MdPaid /> <h3 className="ml-1">Paid</h3></div>
    </div>
    <div className="flex gap-1 pb-2 my-3">
        <h3 className="font-bold">Event Live Link :</h3>
        <h3 className="underline text-blue-600"> Open streaming website</h3>
    </div>
    <div className="flex gap-1 my-3">
        <h3 className="font-bold">Date:</h3>
        <h3>Jul 31st, 2034 6:00 AM - Aug 31st, 2034 6:00 PM IST</h3>
    </div>
        <h3 className="text-xl ml-3">Event starts in -</h3>
    <div className="flex justify-center text-3xl mt-4">
         <Countdown date={Date.now() + 15805189230} renderer={renderer}/>,
    </div>
  </div>

  <button className="my-4 w-full bg-black rounded text-white px-4 py-3" >Buy Now</button>
  <button className="w-full bg-white rounded text-black border border-black px-4 py-3" ><div className="flex gap-2 justify-center items-center">
    Official website 
    <FaExternalLinkAlt />
    </div> </button>
  </>
  )
}

export default Sidebar
