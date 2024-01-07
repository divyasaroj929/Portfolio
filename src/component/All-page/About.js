import React from "react";

const About = ({ resizeWidth }) => {
  console.log(resizeWidth);
  return (
    <>
      <div
        // className=" w-[100%] h-full bg-gray-300 flex flex-col justify-center items-center p-9 mb-3 relative example dark:bg-slate-950 dark:text-white"
        className=" bg-gray-200 font-lemon serif flex flex-col items-start p-12 dark:bg-slate-950 dark:text-white "
      >
        {resizeWidth ? (
          <div className=" w-full font-lemon text-slate-700 text-3xl font-bold flex justify-center items-center mb-6 dark:text-slate-100">
            <h1>About</h1>
          </div>
        ) : (
          <>
            {" "}
            <div className=" font-lemon text-slate-700 text-3xl font-bold mb-6 dark:text-slate-100">
              <h1>About</h1>
            </div>
          </>
        )}

        <p className=" text-2xl p-5 aboutItem rounded-xl list-none p-5 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
          Greetings! I'm Divya Saroj, a self-taught Frontend Web Developer
          residing in the vibrant city of Raipur, Chhattisgarh. With a fervor
          for crafting seamless user experiences, I've honed my skills in HTML,
          CSS, and JavaScript.
        </p>
        <br></br>
        <p className=" text-2xl p-5 aboutItem rounded-xl list-none p-5 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
          My toolkit includes a mastery of HTML, CSS, and JavaScript, coupled
          with proficiency in React-JS and Redux-Toolkit. This amalgamation
          allows me to design and develop responsive websites that marry
          aesthetics with functionality.
        </p>
        <br></br>
        <p className=" text-2xl p-5 aboutItem rounded-xl list-none p-5 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
          I take pride in my diverse portfolio of projects, each a testament to
          my commitment to innovation and quality. From concept to execution, I
          strive to deliver solutions that captivate users and meet the highest
          standards.
        </p>
        <p className=" text-2xl p-5 aboutItem rounded-xl list-none p-5 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
          The dynamic nature of web development propels me to stay at the
          forefront of emerging technologies. I am passionate about continual
          learning and thrive in an environment that challenges me to evolve and
          adapt.
        </p>
        <p className=" text-2xl p-5 aboutItem rounded-xl list-none p-5 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
          When not immersed in lines of code, you'll find me immersed in the
          pages of a novel, seeking inspiration from the boundless worlds
          within. I also relish the outdoors, finding joy in the simplicity of
          fun-filled activities.
        </p>
        <p className=" text-2xl p-5 aboutItem rounded-xl list-none p-5 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
          I am enthusiastic about the limitless possibilities in web development
          and am eager to contribute my skills to innovative projects. Let's
          collaborate and bring extraordinary ideas to life!
        </p>
      </div>
      {/* <section className="container w-[80%] relative bg-gray-900 rounded-2xl p-7 ml-10 mt-5 ">
        <h2 className="title text-xl text-slate-50 font-semibold space-x-3 uppercase">
          About
        </h2>
        <ul>
          <li className="content flex flex-col items-center">
            <img src="" alt="" />
            <div className="aboutItem text-slate-50 flex flex-col gap-2 flex  flex-row items-center rounded-xl list-none p-6 hover:bg-gradient-to-r from-blue-300 to-gray-500 ease-in duration-300 bg-no-repeat hover:bg-cover">
              <h3 className="title text-2xl mt-3 font-medium">
                Frontend Developer
              </h3>
              <p className="text-1xl">
                Hello I'M divya saroj ,A Frontend Web Developer CSS ENTHUSIAST
                AND i like to build user interface.
              </p>
            </div>
          </li>
          <li className="content flex flex-col items-center">
            <img src="" alt="" />
            <div className="aboutItem text-slate-50 flex flex-col gap-2 flex  flex-row items-center rounded-xl list-none p-6 bg-gradient-to-r from-blue-300 to-gray-500 transition ease-in duration-300  bg-no-repeat hover:bg-cover">
              <h3 className="title text-2xl mt-3 font-medium">
                Frontend Developer
              </h3>
              <p className="text-1xl">
                Hello I'M divya saroj ,A Frontend Web Developer CSS ENTHUSIAST
                AND i like to build user interface.
              </p>
            </div>
          </li>
          <li className="content flex flex-col items-center">
            <img src="" alt="" />
            <div className="aboutItem text-slate-50 flex flex-col gap-2 flex  flex-row items-center rounded-xl list-none p-6 hover:bg-gradient-to-r from-blue-300 to-gray-500 hover:ease-in bg-no-repeat hover:duration-400 hover:bg-cover">
              <h3 className="title text-2xl mt-3 font-medium">
                Frontend Developer
              </h3>
              <p className="text-1xl">
                Hello I'M divya saroj ,A Frontend Web Developer CSS ENTHUSIAST
                AND i like to build user interface.
              </p>
            </div>
          </li>
        </ul>
      </section> */}
    </>
  );
};
export default About;
