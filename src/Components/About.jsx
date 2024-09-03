import React from "react";

import { FaCode } from "react-icons/fa6";
import { PiMicrosoftExcelLogo } from "react-icons/pi";
import { FaPenToSquare } from "react-icons/fa6";

const About = () => {
  const Card = [
    {
      Title: "front End Developer",
      desc: "I make the UI design of web page and also make it responsive.",
      icon: <FaCode />,
    },
    {
      Title: "Problem Solving",
      desc: "I can solve the problem of react code at biggerner level.",
      icon: <FaPenToSquare />,
    },
    {
      Title: "Ms Excell",
      desc: "I know a little bit about ms excell also ms word.",
      icon: <PiMicrosoftExcelLogo />,
    },
  ];

  return (
    <>
      <div className=" ml-6">
        <h1 className="text-2xl font-[700]">About Me</h1>
        <hr className="h-[4px] mt-1 bg-[#eeb140] w-[40px]" />
        <p className="text-justify leading-tight tracking-tighter pr-5 mt-5">
          I’m a passionate Front-End Developer with a strong focus on building
          dynamic and responsive web applications using React JS. With a solid
          foundation in HTML, CSS, Tailwind CSS, and JavaScript, I craft
          seamless user experiences that are not only visually appealing but
          also highly functional. I enjoy leveraging modern libraries like GSAP
          to bring interactivity and animations to life, ensuring every project
          stands out. My goal is to continuously evolve my skills and deliver
          high-quality code that meets both user needs and business objectives.
        </p>
        <h1 className="text-2xl font-[700] mt-8">What I'm Doing</h1>
        <div className="grid pt-4 grid-cols-2 mr-4 gap-3">
          {Card.map(({ Title, desc, icon }) => {
            return (
              <>
                <div className="flex hover:scale-105 cursor-pointer duration-300 justify-center items-center gap-2 p-5 bg-zinc-700 rounded-lg">
                  <div className="mr-2 text-[#eeb140] text-2xl bg-zinc-600 py-4 px-4 rounded-lg">
                    {icon}
                  </div>
                  <div>
                    <h1 className="text-xl font-[700]">{Title}</h1>
                    <h3 className="text-md leading-none tracking-tighter pt-1">
                      {desc}
                    </h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
