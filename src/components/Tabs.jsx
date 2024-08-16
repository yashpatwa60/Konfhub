import React, { useState } from 'react'
import Hero2Img from "../assets/images/Hero2Img.png"
const Tabs = () => {

    const [active, setActive] = useState("about")

    const handleClick=(name)=>{
        window.location.replace(`/#${name}`);
        setActive(name)
    }
  return (
    <>
    <div className="h-30 w-50 ml-3 font-semibold flex gap-8 inline-block cursor-pointer">
      <div onClick={() => handleClick("about")} className={`${active=="about" && 'border-b border-black'} hover:bg-slate-300 p-4`}>About</div>
      <div  onClick={() => handleClick("ticket")}  className={`${active=="ticket" && 'border-b border-black'} hover:bg-slate-300 p-4`}>Tickets</div>
      <div  onClick={() => handleClick("speakers")} className={`${active=="speakers" && 'border-b border-black'} hover:bg-slate-300 p-4`}>This is a speaker section</div>
      <div onClick={() => handleClick("workshop")}  className={`${active=="workshop" && 'border-b border-black'} hover:bg-slate-300 p-4`}>This is a workshop section</div>
      <div onClick={() => handleClick("sponsors")} className={`${active=="sponsors" && 'border-b border-black'} hover:bg-slate-300 p-4`}>This is event sponsors</div>
    
    </div>

    <div id="about" className="ml-5 mt-5">
      <h3 className="text-2xl my-3">About Event</h3>
      <p>This is the description of an event. This event was created as an evaluation task for the role of Frontend Engineer. Are you the one we are looking for? Don't get nervous. Take help if you need. Ask us more questions if you did not understand the problem. You can reach-us out at reachus@konfhub.com..</p>
    </div>

    <img height="260px" width="340px" src={Hero2Img} />
    <iframe className="p-3" width="640" height="480" src="https://www.youtube.com/embed/bEM35JDYjrI" title="KonfHub Features Video: Discover the Powerful Features of KonfHub" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

<table className="w-[800px] height-[150px] border-spacing-[30px] border-collapse border border-slate-500 table-fixed">
  <thead className="">
    <tr>
      <th className="border border-slate-600" >A</th>
      <th className="border border-slate-600">B</th>
      <th className="border border-slate-600">C</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-slate-600">A1</td>
      <td className="border border-slate-600">B1</td>
      <td className="border border-slate-600">C1</td>
    </tr>
    <tr>
      <td className="border border-slate-600">A2</td>
      <td className="border border-slate-600">B2</td>
      <td className="border border-slate-600">C2</td>
    </tr>
  </tbody>
</table>

    </>
  )
}

export default Tabs
