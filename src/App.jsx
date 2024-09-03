import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom"
import Home from "./Components/Home"

const App = () => {
  const tags = ["/About","/Resume","/Projects", "/Contact"]

  const location = useLocation();

  return (
    <>
      <div className="bg-zinc-900 text-[#b8b2b2] justify-center items-center flex gap-4 w-full h-screen">
        <Home />
        <div className="bg-zinc-800 overflow-y-auto w-[60%] h-[530px] rounded-lg">
          <div className="flex">
            <div className="w-[40%] h-[50px]"></div>
            <div className="w-[60%] rounded-bl-xl h-[50px] bg-zinc-700">
              <ul className="flex text-lg font-[700] justify-around items-center h-full">
                {tags.map((tag, index) => {
                  const isActive = location.pathname === tag
                  return (
                    <li key={index}>
                      <Link
                        to={tag}
                        className={`cursor-pointer ${
                          isActive ? "text-[#eeb140]" : "text-[#b8b2b2]"
                        }`} 
                      >
                        {tag.replace("/", "")}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
            <Outlet />
        </div>
      </div>
    </>
  );
};

export default App;
