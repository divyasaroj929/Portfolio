import React from "react";
import Navbar from "../navbar/Navbar";
import Heroimg from "../component/Heroimg";
import Footer from "../footer/Footer";
import DarkTheme from "../../component/All-page/DarkTheme";
import Project from "./Project";
import About from "./About";
import Skill from "./Skill";
import { navItem, footerItem } from "../data";

const Home = () => {
  const link_din = `https://linkedin.com/in/divya-saroj-b1b3321b3`;

  return (
    <>
      {/* <DarkTheme /> */}
      <Navbar navItem={navItem} id="navbar" />
      <Heroimg />
      <About />
      <Skill />
      <Project />
      <Footer data={footerItem} />
    </>
  );
};

export default Home;
