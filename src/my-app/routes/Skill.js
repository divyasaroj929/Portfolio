import React, { useState, useEffect, useRef } from "react";
import html from "../../component/dataimage/html.svg";
import css from "../../component/dataimage/css.svg";
import java from "../../component/dataimage/java.svg";
import reactjs from "../../component/dataimage/reactjs.svg";
import redux from "../../component/dataimage/redux.svg";
import tailwind from "../../component/dataimage/tailwind.svg";

const Skill = () => {
  useEffect(() => {
    const addAnimation = () => {
      const scrollers = document.querySelectorAll(".scroller");

      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animation", true);
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div className="div">
      <div className="scroller">
        <ul className="tag-list scroller__inner">
          <li>
            <img src={html} alt="icon" />
          </li>
          <li>
            <img src={css} alt="icon" />
          </li>
          <li>
            <img src={java} alt="icon" />
          </li>
          <li>
            <img src={reactjs} alt="icon" />
          </li>
          <li>
            <img src={redux} alt="icon" />
          </li>
          <li>
            <img src={tailwind} alt="icon" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skill;
