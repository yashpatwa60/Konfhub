import React from 'react'
import WhiteBat from "../assets/images/whitebat.webp"
import BlackBat from "../assets/images/blackbat.png"

const Sponsers = () => {
  return (
    <div id="sponsors" className="ml-5 mt-8">
      <h3 className="text-2xl my-2">THIS IS EVENT SPONSORS</h3>
      <h4 className="my-3">This is description of sponsors section.</h4>
        <div className="w-[200px] border border-[#cacaca]">
        <img width="200px" src={WhiteBat}/>
        </div>

        <h3 className="mt-5 text-2xl">SPONSOR <br/> CATEGORY</h3>
        <img className="m-5 mb-24" width="230px" src={BlackBat}/>
    </div>
  )
}

export default Sponsers
