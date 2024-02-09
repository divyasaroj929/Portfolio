import React, { useState, useEffect } from "react";
import { CiBrightnessDown } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const DarkTheme = () => {
  const [theme, setTheme] = useState("light");
  const options = [
    {
      icon: <CiBrightnessDown />,
      name: "light",
    },
    {
      icon: <MdDarkMode />,
      name: "dark",
    },
  ];
  useEffect(() => {
    const handleThemeChange = () => {
      const element = document.documentElement;
      switch (theme) {
        case "dark":
          element.classList.add("dark");
          localStorage.setItem(`theme`, `dark`);
          break;
        case "light":
          element.classList.remove("dark");
          localStorage.setItem("theme", "light");
          break;
        default:
          localStorage.removeItem("theme");
          break;
      }
    };
    handleThemeChange();
  }, [theme]);

  return (
    <>
      <div className="fixed top-8 left-80 duration-100 dark:slate-700 bg-gray-100  dark:text-white rounded z-50">
        {options.map((opt) => {
          return (
            <>
              <button
                key={opt.name}
                onClick={() => {
                  setTheme(opt.name);
                }}
                className={`w-8 h-8 leading rounded-full text-xl m-1 
                ${theme === opt.name ? "text-black" : "text-sky-600"}
                `}

                //  ${theme === opt.name && "text-sky-600"}
              >
                {opt.icon}
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default DarkTheme;
