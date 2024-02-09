import React from "react";
import ProjectHeroImg from "../component/ProjectHeroImg";
import WorkCard from "../component/WorkCard";
import signup from "../../component/dataimage/signup.png";
import Myntra from "../../component/dataimage/Myntra.png";
import weather from "../../component/dataimage/weather.png";
import cellComponent from "../../component/dataimage/cellComponent.png";
import wizard from "../../component/dataimage/wizard.png";
import searchfun from "../../component/dataimage/searchfun.png";
import Navbar from "../navbar/Navbar";

import { navItem, data } from "../data";
const Project = () => {
  // const data = [
  //   {
  //     img: signup,
  //     cardTitle: "Sign-up",
  //     cardSubTitle:
  //       "i learned about form validation with this project by using javascript and regex ",
  //     cardLink: "https://divyasaroj929.github.io/sign-up-Form/",
  //   },
  //   {
  //     img: Myntra,
  //     cardTitle: "Myntra",
  //     cardSubTitle: " learned about concept of css and use react-router-dom",
  //     cardSubTitle:
  //       "Creating a Myntra-flavored UI: React Router and Navbar Styling in My Project",

  //     cardLink: "https://divyasaroj929.github.io/myntra/",
  //   },
  //   {
  //     img: weather,
  //     cardTitle: "Weather",
  //     cardSubTitle: " learned about how to call fetch API and use debounce",
  //     cardLink: "https://divyasaroj929.github.io/Weatherapp/",
  //   },

  //   {
  //     img: wizard,
  //     cardTitle: "multipurpose modal form",
  //     cardSubTitle:
  //       "Form Evolution:Transforming User Interaction with a Feature-rich Modal",
  //     cardLink: "https://divyasaroj929.github.io/SearchFunction/",
  //   },
  //   {
  //     img: cellComponent,
  //     cardTitle: "Fixed Sidebar with Content",
  //     cardSubTitle:
  //       " Building Modern Layouts: A Journey into React, CSS, and Router-Dom     ",

  //     cardLink: "https://divyasaroj929.github.io/cell-Component/",
  //   },
  //   {
  //     img: searchfun,
  //     cardTitle: "Search",
  //     cardSubTitle: "learned about using fetch API calling  ",
  //     cardLink: "https://divyasaroj929.github.io/SearchFunction/",
  //   },
  // ];

  return (
    <>
      <Navbar navItem={navItem} />
      <ProjectHeroImg
        heading="Project."
        text=" Some of my most recent works...."
      />
      <WorkCard data={data} />
    </>
  );
};

export default Project;
