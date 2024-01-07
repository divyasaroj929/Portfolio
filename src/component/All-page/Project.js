import React from "react";
import Card from "../card/Card";

import signup from "../dataimage/signup.png";
import cellComponent from "../dataimage/cellComponent.png";
import weather from "../dataimage/weather.png";
import wizard from "../dataimage/wizard.png";
import Myntra from "../dataimage/Myntra.png";
import searchfun from "../dataimage/searchfun.png";

const Project = ({ resizeWidth }) => {
  const data = [
    {
      img: signup,
      cardTitle: "Sign-up",
      cardSubTitle:
        "i learned about form validation with this project by using javascript and regex ",
      cardLink: "https://divyasaroj929.github.io/sign-up-Form/",
    },
    {
      img: Myntra,
      cardTitle: "Myntra",
      cardSubTitle: " learned about concept of css and use react-router-dom",
      cardSubTitle:
        "Creating a Myntra-flavored UI: React Router and Navbar Styling in My Project",

      cardLink: "https://divyasaroj929.github.io/myntra/",
    },
    {
      img: weather,
      cardTitle: "Weather",
      cardSubTitle: " learned about how to call fetch API and use debounce",
      cardLink: "https://divyasaroj929.github.io/Weatherapp/",
    },

    {
      img: wizard,
      cardTitle: "multipurpose modal form",
      cardSubTitle:
        "Form Evolution: Transforming User Interaction with a Feature-rich Modal",
      cardLink: "https://divyasaroj929.github.io/SearchFunction/",
    },
    {
      img: cellComponent,
      cardTitle: "Fixed Sidebar with Content",
      cardSubTitle:
        " Building Modern Layouts: A Journey into React, CSS, and Router-Dom     ",

      cardLink: "https://divyasaroj929.github.io/cell-Component/",
    },
    {
      img: searchfun,
      cardTitle: "Search",
      cardSubTitle: "learned about using fetch API calling  ",
      cardLink: "https://divyasaroj929.github.io/SearchFunction/",
    },
  ];
  console.log(data);
  return (
    <>
      <div className="box w-[100%]  relative h-auto  bg-gray-300 overflow-hidden flex   flex-col flex-wrap justify-center items-center p-9  mb-3 example dark:bg-slate-950 dark:text-white">
        {resizeWidth ? (
          <div className="font-lemon text-slate-700 text-3xl font-bold  flex justify-center items-center mb-6 dark:text-slate-100">
            <h1>Project</h1>
          </div>
        ) : (
          <>
            <div className="font-lemon text-slate-700 text-3xl font-bold mb-6  dark:text-slate-100 w-full flex justify-start items-start  ">
              <h1>Project</h1>
            </div>
          </>
        )}

        <Card data={data} resizeWidth={resizeWidth} />
      </div>
    </>
  );
};

export default Project;
