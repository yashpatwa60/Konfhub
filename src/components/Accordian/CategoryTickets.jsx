import React from 'react'
import Jobs from "../../../db.json"
import { IoLocation } from "react-icons/io5";

const CategoryTickets = () => {
  return (
    <>
    {/* <h3 className="text-xl p-2 mt-3">Tickets</h3> */}
    <div className="w-[800px] bg-[#f6f6fc] p-10 ">
      {  Jobs["Category1_Ticket"].map((ticket, index) =>
          <div key={`Category-${index}`} className="shadow-slate-700 rounded-lg mt-3 flex flex-col p-2 gap-3 bg-white">
            <h3>{ticket.title}</h3>
            <p>{ticket.desc}</p>
            <div className="flex gap-1 items-center">
                <IoLocation />
                <p className="text-blue-500 font-semibold">{ticket.location}</p>
            </div>
            <p>{ticket.additionalDetails}</p>
            <span className="bg-slate-300 w-[320px] p-2">{ticket.date}</span>

            <div className="flex justify-between">
                <h2 className="text-xl">{ticket.tag}</h2>
                <button className="bg-black py-3 px-4  text-white rounded ">Register</button>
            </div>
        </div>
        )
      }
       
    </div>
    </>
  )
}

export default CategoryTickets
