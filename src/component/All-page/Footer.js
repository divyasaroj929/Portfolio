import React from "react";
import { useNavigate } from "react-router-dom";
const Footer = ({ data, id }) => {
  const navigate = useNavigate();
  const comeHomeScreenAgian = () => {
    navigate("/");
  };
  // console.log(data);
  return (
    <>
      <div
        id={id}
        className="h-20 w-full  pt-7 pb-7 flex flex-col  justify-around items-center  bg-gray-200 border-2 border-gray-100 "
      >
        <div className=" h-10 w-full flex  justify-around items-center   ">
          {data.map((item, index) => {
            // console.log(item.link, "link");
            return (
              <>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  <div
                    className="flex justify-center items-center flex-col p-2  w-auto"
                    key={index}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                </a>
              </>
            );
          })}
        </div>
        <p className="text-x text-center font-thin text-slate-700 cursor-pointer ">
          developed by ©<span onClick={comeHomeScreenAgian}>divya saroj</span>
        </p>
      </div>
    </>
  );
};

export default Footer;
