import React, { useState, useEffect, useRef } from "react";
// import React, { useState, useEffect } from "react";

import Navbar from "../component/All-page/Navbar";
import DarkTheme from "./All-page/DarkTheme";
import Info_page from "./All-page/Info_page";
import About from "./All-page/About";
import Project from "./All-page/Project";
import Footer from "./All-page/Footer";

import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdOutlineContactPage } from "react-icons/md";
import { MdArrowRightAlt } from "react-icons/md";

import html from "./dataimage/html.svg";
import css from "./dataimage/css.svg";
import java from "./dataimage/java.svg";
import tailwind from "./dataimage/tailwind.svg";
import reactjs from "./dataimage/reactjs.svg";
import redux from "./dataimage/redux.svg";
import Skill from "./All-page/Skill";

import myresume from "./dataimage/myresume.pdf";

<MdArrowRightAlt />;
const Home = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const [resizeWidth, setResizeWidth] = useState(false);

  console.log(resizeWidth);
  useEffect(() => {
    const handleResize = () => {
      setResizeWidth(window.innerWidth < 768);
      console.log(window.innerWidth < 768); // Change the breakpoint according to your needs

      console.log(resizeWidth);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   console.log("Effect is running");
  //   const handleScroll = () => {
  //     setTimeout(() => {
  //       const footer = document.getElementById("footer");
  //       if (footer) {
  //         const footerRect = footer.getBoundingClientRect();
  //         console.log("footerRect.top:", footerRect.top);
  //         console.log("window.innerHeight:", window.innerHeight);
  //         setIsNavbarHidden(footerRect.top < window.innerHeight);
  //       }
  //     }, 0);
  //   };
  //   handleScroll();

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   let lastScrollTop;
  //   const navbar = document.getElementById("navbar");

  //   const handleScroll = function () {
  //     console.log(window.scrollY);
  //     console.log(document.documentElement.scrollTop);

  //     var scrollTop = window.scrollY || document.documentElement.scrollTop;
  //     console.log(scrollTop);

  //     if (scrollTop > lastScrollTop) {
  //       navbar.style.display = "none";
  //     } else {
  //       navbar.style.display = "block";
  //     }
  //     lastScrollTop = scrollTop;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   handleScroll();
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const footer = document.getElementById("footer");

  // const footerRect = footer.getBoundingClientRect();
  // console.log("footerRect.top:", footerRect.top);

  const link_din = `https://linkedin.com/in/divya-saroj-b1b3321b3`;
  const navItem = [
    // {
    //   name: "Home",
    //   path: "/",
    // },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Skill",
      path: "/Skill",
    },

    {
      name: "Project",
      path: "/project",
    },
  ];
  const skillData = [
    {
      icon: html,
    },
    {
      icon: css,
    },
    {
      icon: java,
    },
    {
      icon: reactjs,
    },
    {
      icon: tailwind,
    },
    {
      icon: redux,
    },
  ];
  const footerItem = [
    {
      icon: <SiGmail />,
      link: "mailto:divyasaroj29@gmail.com",
      name: "Mail",
    },
    {
      icon: <FaLinkedinIn />,
      link: link_din,
      name: "linkdin",
    },
    {
      icon: <MdOutlineContactPage />,
      link: myresume,
      name: "resume",
    },
  ];

  return (
    <>
      <div className="h-screen font-custom w-screen bg-slate-300 overflow-scroll md:h-screen w-screen bg-slate-300 overflow-scroll lg:h-screen w-screen bg-slate-300 ">
        {resizeWidth ? (
          <>
            <DarkTheme />
            <Info_page />
            <About resizeWidth={resizeWidth} />
            <Skill data={skillData} resizeWidth={resizeWidth} />
            <Project resizeWidth={resizeWidth} />
            <Footer data={footerItem} id="footer" />
          </>
        ) : (
          <>
            <DarkTheme />
            <Navbar
              navItem={navItem}
              navbarHidden={isNavbarHidden}
              id="navbar"
            />
            <Info_page />
            <About resizeWidth={resizeWidth} />
            <Skill data={skillData} resizeWidth={resizeWidth} />
            <Project resizeWidth={resizeWidth} />
            <Footer data={footerItem} id="footer" />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
