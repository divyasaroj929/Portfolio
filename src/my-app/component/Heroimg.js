import React from "react";

import Button from "../../component/All-page/Button ";
import heroimg from "../../component/dataimage/heroimg.jpg";
import myresume from "../../component/dataimage/myresume.pdf";

const Heroimg = () => {
  return (
    <>
      <div className="hero">
        <div className="mask">
          <img className="intro-img" src={heroimg} alt="" />
          <div className="content">
            <p> HI, I'M A</p>
            <h1>FRONT-END DEVELOPER</h1>
            <div className="hero-btn">
              <Button className="btn" name="RESUME" link={myresume} />

              <Button
                className="btn btn-light"
                name="PROJECT"
                link="/Project"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Heroimg;
