
import React from 'react'
import { FaGoogle } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { FaAmazon } from "react-icons/fa6";
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex justify-center items-center bg-[#FFDBA6]">
      <div className="w-[300px]" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("src/assets/images/login_logo.svg")`, height: "600px", width: "700px"}}>
      </div>
      <div className="absolute top-0 " style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("src/assets/images/Top_middle.svg")`, height: "200px", width: "700px"}}>
    </div>
    <div className="absolute top-0 left-0" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("src/assets/images/Top_left.svg")`, height: "200px", width: "700px"}}>
    </div>
    <div className="absolute bottom-0 left-0" style={{ backgroundRepeat: "no-repeat", backgroundImage: `url("src/assets/images/Bottom_left_most.svg")`, height: "200px", width: "700px"}}>
    </div>
      <div className="flex justify-center rounded-lg items-center bg-white h-[520px]">
      <div className="w-[400px] justify-center items-center p-10 border "> 
    
        <h3 className="text-center">Sign In</h3>
          <div className="">
            <h4>Email</h4>
            <input className="w-full outline-none border-b border-[#572148]"></input>
          </div>
          <div className="my-4">
            <h4>Password</h4>
            <input className="w-full outline-none border-b border-[#572148]"></input>
          </div>
          <h4 className="align-end underline">Forgot Password ?</h4>

          <button className="my-5 w-full px-4 py-3 bg-[#572148] text-white">Sign In</button>
          <h5 className="text-center">Or</h5>
          <button className="my-5 w-full px-4 py-3 bg-white text-[#572148] border border-[#572148]">Request OTP</button>
          <h5 className="text-center">Or</h5>
          <div className="flex gap-2 justify-center my-3">
            
            <div className="block justifyw-5 border p-5 shadow-lg"><FaGoogle fill="red" className=""/></div>
            <div className="block  justifyw-5 border p-5 shadow-lg "><MdFacebook fill="blue"/></div>
            <div className="block justifyw-5 border p-5 shadow-lg"><FaAmazon fill="black"/></div>
          </div>

          <h3 className="text-center">Don't have an account? <Link className="text-red-500" to="/signup">Sign up</Link></h3>
      </div>
      </div>
    </div>
  )
}

export default Login
