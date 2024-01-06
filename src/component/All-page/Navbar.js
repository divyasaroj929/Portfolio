// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = (Props) => {
//   const { navItem, navbarHidden } = Props;
//   console.log(navItem, "navdata", Props);

//   return (
//     <>
//       <div
//         // style={Props.style}
//         className={`h-[40px] w-[30%] rounded-full bg-black/30 backdrop-blur-2xl dark:bg-slate-200 dark:text-neutral-900 text-neutral-100 overflow-hidden fixed bottom-[90px] left-[35%] z-50 ${
//           navbarHidden ? "hidden" : "block"
//         } md:block`}
//       >
//         <ul className=" h-full flex justify-center items-center">
//           {navItem.map((item, index) => {
//             console.log(item);
//             return (
//               <>
//                 <li
//                   key={index}
//                   className="p-3 hover:text-black dark:hover:text-white"
//                 >
//                   <NavLink to={item.path}>{item.name}</NavLink>
//                 </li>
//               </>
//             );
//           })}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ navItem, isNavbarHidden, id }) => {
  return (
    <>
      <div
        id={id}
        className={`h-[40px] w-[30%] rounded-full bg-black/30 backdrop-blur-2xl dark:bg-slate-200 dark:text-neutral-900 text-neutral-100 overflow-hidden fixed bottom-[90px] left-[35%] z-50 ${
          isNavbarHidden ? "hidden" : "block"
        } md:block`}
      >
        <ul className="h-full flex justify-center items-center">
          {navItem.map((item, index) => (
            <li
              key={index}
              className="p-3 hover:text-black dark:hover:text-white"
            >
              <NavLink to={item.path}>{item.name}</NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
