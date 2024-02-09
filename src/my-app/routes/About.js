import React from "react";
import Navbar from "../navbar/Navbar";
import ProjectHeroImg from "../component/ProjectHeroImg";
import { footerItem, navItem } from "../data";
import Footer from "../footer/Footer";
const About = () => {
  return (
    <>
      <Navbar navItem={navItem} />
      <ProjectHeroImg
        heading="ABOUT"
        text="Im a friendly Front-end Developer."
      />
      <p>
        Greetings! I'm Divya Saroj, a self-taught Frontend Web Developer
        residing in the vibrant city of Raipur, Chhattisgarh. With a fervor for
        crafting seamless user experiences, I've honed my skills in HTML, CSS,
        and JavaScript.
      </p>
      <br></br>
      <p>
        My toolkit includes a mastery of HTML, CSS, and JavaScript, coupled with
        proficiency in React-JS and Redux-Toolkit. This amalgamation allows me
        to design and develop responsive websites that marry aesthetics with
        functionality.
      </p>
      <br></br>
      <p>
        I take pride in my diverse portfolio of projects, each a testament to my
        commitment to innovation and quality. From concept to execution, I
        strive to deliver solutions that captivate users and meet the highest
        standards.
      </p>
      <br></br>

      <p>
        The dynamic nature of web development propels me to stay at the
        forefront of emerging technologies. I am passionate about continual
        learning and thrive in an environment that challenges me to evolve and
        adapt.
      </p>
      <br></br>

      <p>
        When not immersed in lines of code, you'll find me immersed in the pages
        of a novel, seeking inspiration from the boundless worlds within. I also
        relish the outdoors, finding joy in the simplicity of fun-filled
        activities.
      </p>
      <br></br>

      <p>
        I am enthusiastic about the limitless possibilities in web development
        and am eager to contribute my skills to innovative projects. Let's
        collaborate and bring extraordinary ideas to life!
      </p>
    </>
  );
};

export default About;
