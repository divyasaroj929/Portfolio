import React from "react";
import { NavLink } from "react-router-dom";

const WorkCard = ({ data }) => {
  return (
    <>
      <div className="work-container">
        <h1 className="project-heading"> projects</h1>
        <div className="project-container">
          {data.map((item, index) => {
            return (
              <>
                <div className="project-card">
                  <img src={item.img} alt="image" />
                  <h2 className="project-title">{item.cardTitle}</h2>
                  <div className="pro-details">
                    <p>{item.cardSubTitle}</p>
                    <div className="pro-btns">
                      <NavLink to={item.cardLink} className="btn">
                        View
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default WorkCard;
