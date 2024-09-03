import React from 'react'

import { FiMail } from "react-icons/fi";
import { FiSmartphone } from "react-icons/fi";
import { CiCalendar } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { SiGithub } from "react-icons/si";

const Home = () => {
  return (
    <>
      <div className="bg-zinc-800 w-[250px] flex flex-col items-center py-5 h-[530px] rounded-lg">
          <div className="bg-zinc-700 rounded-lg w-[80%] h-[30%]"></div>
          <h1 className=" text-3xl font-[800] mt-4">Khizar Azam</h1>
          <div className="bg-zinc-700 font-[700] py-1 px-3 rounded-lg mt-3">
            Front End Developer
          </div>
          <hr className="w-[80%] mt-5" />
          <div className=" mt-3 flex gap-x-3 justify-center items-center">
            <div className="text-xl text-[#eeb140]">
              <FiMail />
            </div>
            <div className=" leading-tight">
              <h2 className="text-md font-[700]">Email</h2>
              <h3 className="text-sm">khizarazam9@gmail.com</h3>
            </div>
          </div>
          <div className=" mt-3 flex gap-x-3 justify-center pr-[45px] items-center">
            <div className="text-xl text-[#eeb140]">
              <FiSmartphone />
            </div>
            <div className=" leading-tight">
              <h2 className="text-md font-[700]">Phone</h2>
              <h3 className="text-sm">+92 308-9301939</h3>
            </div>
          </div>
          <div className=" mt-3 flex gap-x-3 justify-center pr-[75px] items-center">
            <div className="text-xl text-[#eeb140]">
              <CiCalendar />
            </div>
            <div className=" leading-tight">
              <h2 className="text-md font-[700]">Birth Date</h2>
              <h3 className="text-sm">05/02/2005</h3>
            </div>
          </div>
          <hr className="w-[80%] mt-5" />
          <div className="flex text-2xl justify-evenly w-[50%] mt-5">
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <CiLinkedin />
            </a>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <SiGithub />
            </a>
          </div>
        </div>
    </>
  )
}

export default Home
