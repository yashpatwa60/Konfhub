import React from 'react'
import HeroImg from "../assets/images/HeroImg.jpg"


const Hero = () => {
  return (
    <div className="flex justify-center">
        <div className="h-500 w-[900px] ">
            <div className="p-3 bg-white">
                <div className="p-5 rounded h-95 w-120 bg-[#f8f9fa]">
                    <div className="flex justify-center"> 
                        <img src={HeroImg} />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
