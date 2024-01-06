import React from "react";
import Button from "./Button ";
import myresume from "../dataimage/myresume.pdf";

const Info_page = () => {
  return (
    <>
      <div className=" w-[100%] h-full bg-gray-300 flex flex-col flex-wrap justify-center items-center p-9 mb-3 relative example font-Crimson Pro dark:bg-slate-950 dark:text-white">
        <p className="absolute top-10 left-10">Divya Saroj</p>
        <p className="text-7xl text-slate-700 pt-3  mb-10  md:text-8xl dark:text-slate-200">
          <span className="line_first" id="one">
            Frontend
          </span>
          <span className="line_second"> Developer</span>
        </p>

        <div className="topblur" />
        <Button name="Resume" link={myresume} />
      </div>
    </>
  );
};

export default Info_page;
