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

import html from "./dataimage/html.png";
import css from "./dataimage/css.png";
import java from "./dataimage/java.png";
import react from "./dataimage/react.png";
import taliwind from "./dataimage/taliwind.png";
import redux from "./dataimage/redux.png";
import Skill from "./All-page/Skill";

import myresume from "./dataimage/myresume.pdf";
import Headroom from "react-headroom";

<MdArrowRightAlt />;
const Home = () => {
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [resizeWidth, setResizeWidth] = useState(false);

  console.log(resizeWidth);
  useEffect(() => {
    const handleResize = () => {
      setResizeWidth(window.innerWidth < 768); // Change the breakpoint according to your needs
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

  const linkdin = `https://linkedin.com/in/divya-saroj-b1b3321b3`;
  const navItem = [
    {
      name: "info",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
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
      icon: react,
    },
    {
      icon: taliwind,
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
      link: linkdin,
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
      <div className="h-screen w-screen bg-slate-300 overflow-scroll md:h-screen w-screen bg-slate-300 overflow-scroll lg:h-screen w-screen bg-slate-300 ">
        {resizeWidth ? (
          <>
            <DarkTheme />
            <Info_page />
            <About />
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
            <About />
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
