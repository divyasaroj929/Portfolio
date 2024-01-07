import React, { useEffect, useState } from "react";
import Button from "../All-page/Button ";

const Card = ({ resizeWidth, data }) => {
  // const [resizeWidth, setResizeWidth] = useState(false);

  // console.log(resizeWidth);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setResizeWidth(window.innerWidth < 768); // Change the breakpoint according to your needs
  //   };

  //   // Initial check
  //   handleResize();

  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  // const addHoverClass = (element) => {
  //   const parent = element.parentNode;
  //   const newDiv = document.createElement(`div`);
  //   newDiv.classList.add(`content`, `hovered`);
  //   newDiv.innerHTML = `'<div class="slide-in">New Div</div>'`;
  //   if (parent) {
  //     parent.appendChild(newDiv);
  //   }
  // };
  // const removeHoverClass = (element) => {
  //   const parent = element.parentNode;
  //   const newDiv = parent.querySelectorAll("hovered");
  //   if (newDiv) {
  //     parent.removeChild(newDiv);
  //   }
  // };

  // console.log(resizeWidth);
  // const { data } = Props;
  // console.log(data);
  return (
    <>
      {/* try hover effect */}

      {/* <div className="slider-div-from-left">
        {data.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className=" md: w-[100%] h-[100%] bg-gray-300 flex flex-col justify-center items-center m-3 p-5 relative bg-teal-100 dark:text-white 
      md:w-[100%] bg-gray-300 flex flex-col justify-center items-center m-3 p-5 relative bg-teal-100 dark:text-white  "
              >
                <div
                  className=" relative flex justify-between items-center hover:transition-5s ease"
                  onMouseOver={addHoverClass}
                  onMouseLeave={removeHoverClass}
                >
                  <div>
                    <img src={item.img} alt="" className="bg-cover" />
                  </div>
                  <div className="slide-in"></div>
                </div>
              </div>
            </>
          );
        })}
      </div> */}

      {/* try hover effect */}

      <div className="slider-div-from-left">
        {data.map((item, index) => {
          return (
            <>
              {resizeWidth ? (
                <section className="bg-gray-900 h-[370px] flex justify-center items-center gap-x-20 text-white md:none lg:none">
                  <div
                    key={index}
                    className="w-[300px] group-perspective h-[320px] bg-transparent cursor-pointer"
                  >
                    <div className=" rotate relative preserve-3d hover:my-rotate-y-180 w-full h-full duration-1000 ">
                      <div className="absolute backface-hidden border-2 w-full h-full">
                        <img
                          src={item.img}
                          alt=""
                          className="bg-cover backface-hidden h-full w-full "
                        />
                      </div>
                      <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-gray-100 ">
                        <div className=" h-full  bg-black/30 backdrop-blur-2xl dark:bg-slate-200 dark:text-neutral-900 text-neutral-100 overflow-hidden">
                          <h1 className=" text-center text-3xl font-semibold pl-2 pt-5 ">
                            {item.cardTitle}
                          </h1>
                          <h6 className="text-2xl font-normal p-5 flex justify-center items-center pl-5 pb-3">
                            {item.cardSubTitle}
                          </h6>
                        </div>
                        <a href={item.cardLink} target="_">
                          <Button
                            name="visit site"
                            className=" h-13 w-20  p-4 flex justify-center items-center bg-teal-500 shadow whitespace-nowrap shadow-slate-700/100 px-6 py-2 font-semibold text-white rounded-full  absolute bottom-10  left-10 delay-200 duration-1000 z-10 hover:bg-gray-800 hover:text-white dark:hover:bg-slate-200 dark:hover:text-black
                          "
                            // hover:bottom-30 scale-0 hover:scale-125
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              ) : (
                <div
                  key={index}
                  className="parent 
                   md: w-[100%] h-[100%] bg-gray-300 flex flex-col justify-center items-center m-3 p-5 relative bg-teal-100 dark:text-white 
                   md:w-[100%]  bg-gray-300 flex flex-col justify-center items-center m-3 p-5 relative bg-teal-100 dark:text-white  
                   "
                >
                  <div
                    className=" relative flex justify-between items-center 
                   md:"
                  >
                    <div>
                      <img src={item.img} alt="" className="bg-cover " />
                    </div>
                    <div
                      className=" layer absolute left-10 bottom-20 text-left font-bold uppercase text-3xl  text-slate-700 
                    md:"
                    >
                      <div className=" font-lemon mb-2 text-1xl lg:mb-2 ">
                        {item.cardTitle}
                      </div>
                      <div className=" font-custom text-xs lg:text-xl  text-slate-700 font-semibold">
                        {item.cardSubTitle}
                      </div>
                    </div>
                    <a href={item.cardLink} target="_">
                      <Button
                        name="visit site"
                        className=" btn shadow whitespace-nowrap shadow-slate-700/100 text-xl text-center text-slate-700   border-1 border-gray-500 rounded absolute bottom-9 left-10 px-1 py-1 hover:bg-gray-800 hover:text-white lg:btn shadow whitespace-nowrap shadow-slate-700/100 text-2xl text-center text-slate-700   border-1 border-gray-500  absolute bottom-9 left-10 px-2 py-1 hover:bg-gray-800 hover:text-white"
                      />
                    </a>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
