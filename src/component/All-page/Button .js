import React from "react";
import myresume from "../dataimage/myresume.pdf";
const Button = (props) => {
  return (
    <>
      <div className={props.className}>
        <button onClick={props.onClick}>
          <a href={props.link} target="_blank">
            {props.name}
          </a>
        </button>
        {props.icon}
      </div>
    </>
  );
};
Button.defaultProps = {
  type: "button",
  text: "ok",
  variant: "fill",
  className:
    " btn shadow whitespace-nowrap bg-teal-500 shadow-slate-700/100 text-1xl text-center text-slate-700   border-1 border-gray-500 rounded-full absolute bottom-9 left-10 px-1 py-1 hover:bg-gray-800 hover:text-white lg:btn shadow whitespace-nowrap shadow-slate-700/100 text-2xl text-center text-slate-700   border-1 border-gray-500  absolute bottom-9 left-10 px-2 py-1 hover:bg-gray-800 hover:text-white",
};

export default Button;
