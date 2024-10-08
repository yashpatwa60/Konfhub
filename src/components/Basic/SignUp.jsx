import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaAmazon } from "react-icons/fa6";
import { Link } from 'react-router-dom'

import loginImg from "../../assets/images/login_logo.svg"
import topMiddle from "../../assets/images/Top_middle.svg"
import topLeft from "../../assets/images/Top_left.svg"
import bottomLeft from "../../assets/images/Bottom_left_most.svg"

const Signup = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFDBA6]">
    <div className="w-[300px]" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("${loginImg}")`, height: "800px", width: "700px"}}>
    </div>
    <div className="absolute top-0 " style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("${topMiddle}")`, height: "800px", width: "700px"}}>
    </div>
    <div className="absolute top-0 left-0" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("${topLeft}")`, height: "800px", width: "700px"}}>
    </div>
    <div className="absolute bottom-0 left-0" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("${bottomLeft}")`, height: "200px", width: "700px"}}>
    </div>
    <div className="flex justify-center rounded-lg items-center bg-white h-[750px]">
    <div className="w-[400px] justify-center items-center p-10 border "> 
  
      <h3 className="text-center my-3">Sign UP</h3>
        <div className="">
          <h4>Email</h4>
          <input className="w-full outline-none border-b border-[#572148]"></input>
        </div>
        <div className="my-4">
          <h4>Password</h4>
          <input className="w-full outline-none border-b border-[#572148]"></input>
        </div>
        <div className="my-4">
          <h4>Confirm Password</h4>
          <input className="w-full outline-none border-b border-[#572148]"></input>
        </div>
        <h4 className="align-end underline">Forgot Password ?</h4>

        <button className="my-5 w-full px-4 py-3 bg-[#572148] text-white">Sign Up</button>
        <h5 className="text-center">Or</h5>
        <button className="my-5 w-full px-4 py-3 bg-white text-[#572148] border border-[#572148]">Request OTP</button>
        <h5 className="text-center">Or</h5>
        <div className="flex gap-2 justify-center my-3">
          
          <div className="block rounded-lg justifyw-5 border p-5 shadow-lg"><FaGoogle fill="red" className=""/></div>
          <div className="block  rounded-lg justifyw-5 border p-5 shadow-lg "><MdFacebook fill="blue"/></div>
          <div className="block rounded-lg justifyw-5 border p-5 shadow-lg"><FaAmazon fill="black"/></div>
        </div>

        <h3 className="text-center">Don't have an account? <Link className="text-red-500" to="/login">Sign in</Link></h3>
        <p>By signing up, I accept the KonfHub <span className="text-red-500 underline">Terms & Conditions</span> and <span className="text-red-500 underline">Code Of Conduct</span> and have read the <span className="text-red-500 underline">Privacy Policy</span>. I agree to KonfHub to share my information with the event organizer and receive event related updates.</p>
    </div>
    </div>
  </div>
  )
}

export default Signup
