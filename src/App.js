// import { Route, Routes } from "react-router-dom";
// import Info_page from "./component/All-page/Info_page";
// import About from "./component/All-page/About";
// import Project from "./component/All-page/Project";
// import Skill from "./component/All-page/Skill";
// import Home from "./component/Home";
// import "./App.css";
// import "./animation.css";

// function App() {
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path="/Portfolio" element={<Home />} />
//         <Route path="/intro" element={<Info_page />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/skill" element={<Skill />} />

//         <Route path="/project" element={<Project />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./my-app/routes/Home";
import About from "./my-app/routes/About";
import Project from "./my-app/routes/Project";
import "./my-css-file.css";
const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/Portfolio" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </>
  );
};

export default App;
