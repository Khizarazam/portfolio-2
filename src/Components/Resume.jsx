import React from "react";

import { GiOpenBook } from "react-icons/gi";
import { IoMdArrowDropright } from "react-icons/io";

const Resume = () => {
  const educationCard = [
    {
      title: "Intermediate",
      date: "2021-2023",
      from: "Leads groups of colleges",
      icon: <IoMdArrowDropright />,
    },
    {
      title: "Matric",
      date: "2019-2021",
      from: "Gouverment higher secondary school",
      icon: <IoMdArrowDropright />,
    },
   
  ];

const skills = [
  {
    skill: "HTML/CSS",
    percentage: '95'
  },
  {
    skill: "JAVASCRIPT",
    percentage: '90'
  },
  {
    skill: "TAILWIND CSS",
    percentage: '90'
  },
  {
    skill: "REACT JS",
    percentage: '85'
  },
  {
    skill: "GSAP",
    percentage: '80'
  }
]  

  return (
    <div className=" ml-6">
      <h1 className="text-2xl font-[700]">Resume</h1>
      <hr className="h-[4px] mt-1 bg-[#eeb140] w-[40px]" />
      <div className="flex mt-12 items-center">
        <GiOpenBook className="text-2xl text-[#eeb140]" />
        <h1 className="text-xl ml-6 font-[700]">Education</h1>
      </div>
      <div className=" leading-none ml-3">
        {educationCard.map(({ title, date, icon, from }) => {
          return (
            <>
              <div className="flex mt-5">
                <div className="text-2xl pt-1 text-[#eeb140]">{icon}</div>
                <div className="pl-3">
                  <h1 className="text-lg font-[500]">{title}</h1>
                  <div>
                    <h2>{from}</h2>
                    <h3 className="text-sm">{date}</h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="w-[90%] mb-5 mt-12 rounded-lg bg-zinc-700">
        <h1 className="text-2xl text-[#eeb140] p-3 font-[700]">My Skills</h1>
        { skills.map(({skill,percentage})=>{
          return(
            <>
              <div className="pl-8 pb-5 hover:scale-105 duration-300 cursor-pointer">
                <div className="flex items-center gap-4">
                <h1 className="text-md font-[700]">{skill}</h1>
                <h3 className="text-md font-[700]">{percentage}%</h3>
                </div>
                <div className="w-[90%] border-2 rounded-lg mt-2 border-zinc-500 h-3">
                  <div style={{width:`${percentage}%`}} className="bg-[#eeb140] h-2 rounded-lg"></div>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  );
};

export default Resume;
