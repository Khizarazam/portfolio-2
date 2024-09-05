import React from "react";

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
        <div className="bg-zinc-700 overflow-hidden rounded-lg w-[80%] h-[30%]">
          <img
            src="data:image/png;base64,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"
            alt="image"
            className="text-xl"
          />
        </div>
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
          <a
           href="https://www.instagram.com/__choudhary_musa/"
           target="_blank"
           title="Instagram"
           rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a
           href="https://www.linkedin.com/in/khizar-azam-47b28530a/" 
           target="_blank"
           title="LinkedIn"
           rel="noopener noreferrer">
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/Khizarazam"
            target="_blank"
            title="github"
            rel="noopener noreferrer"
          >
            <SiGithub />
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
