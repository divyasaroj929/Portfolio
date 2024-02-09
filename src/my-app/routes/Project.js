import React from "react";
import ProjectHeroImg from "../component/ProjectHeroImg";
import WorkCard from "../component/WorkCard";
import Navbar from "../navbar/Navbar";

import { navItem, data } from "../data";
const Project = () => {
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
