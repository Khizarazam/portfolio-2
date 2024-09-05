import React from "react";

const Projects = () => {
  const simple = [
    {
      title: "Background Changer",
      desc: "In this project you can change the background of body by clicking on a button.",
      link: ''
    },
    {
      title: "todo App",
      desc: "In this project you can make your own todo list for your daily task.",
      link: "https://khizarazam.github.io/todo-app/",
    },
    {
      title: "Background Changer",
      desc: "In this project you can change the background of body by clicking on a button.",
      link: ""
    },
    {
      title: "Background Changer",
      desc: "In this project you can change the background of body by clicking on a button.",
      link: ""
    },
  ];

  const animated = [
    {
      title: "Animated Project",
      desc: "Lorem ipsum dolor sit amet.",
      link: "https://khizarazam.github.io/scroll-animation/"
    },
    {
      title: "Animated Project",
      desc: "Lorem ipsum dolor sit amet.",
      link: 'https://khizarazam.github.io/scroll-animate-2/'
    },
  ];

  return (
    <div className="ml-6">
      <h1 className="text-2xl font-[700] ">Projects</h1>
      <hr className="h-[4px] mt-1 bg-[#eeb140] w-[40px]" />
      <h1 className="text-3xl text-[#eeb140] font-[700] pt-[50px]">Simple</h1>
      <div className="gap-3 mt-5 grid grid-cols-2 mb-5 pl-4">
        {simple.map(({ title, desc, link }) => {
          return (
            <>
              <div className="bg-zinc-700 hover:bg-zinc-600 w-[320px] hover:scale-105 cursor-pointer duration-300 p-3 rounded-lg h-[180px]">
                <h1 className="text-2xl font-[700] text-[#eeb140]">{title}</h1>
                <h3 className="text-sm font-[500] pt-2">{desc}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="ml-[180px] hover:bg-zinc-800 mt-8 bg-zinc-500 py-1 px-5 rounded-full">
                    view more
                  </button>
                </a>
              </div>
            </>
          );
        })}
      </div>
      <h1 className="text-3xl text-[#eeb140] font-[700] pt-[50px]">Animated</h1>
      <div className="gap-3 mt-5 grid grid-cols-2 mb-5 pl-4">
        {animated.map(({ title, desc, link }) => {
          return (
            <>
              <div className="bg-zinc-700 hover:bg-zinc-600 w-[320px] hover:scale-105 cursor-pointer duration-300 p-3 rounded-lg h-[180px]">
                <h1 className="text-2xl font-[700] text-[#eeb140]">{title}</h1>
                <h3 className="text-sm font-[500] pt-2">{desc}</h3>
                <a href={link} target="_blank" rel="noopener noreferrer">
                  <button className="ml-[180px] hover:bg-zinc-800 mt-8 bg-zinc-500 py-1 px-5 rounded-full">
                    view more
                  </button>
                </a>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
