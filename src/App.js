import { Route, Routes } from "react-router-dom";
import "./App.css";
import Info_page from "./component/All-page/Info_page";
import About from "./component/All-page/About";
import Project from "./component/All-page/Project";
import Home from "./component/Home";
import DarkTheme from "./component/All-page/DarkTheme";

function App() {
  return (
    <div className="App">
      {/* <DarkTheme /> */}
      {/* <Home /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/intro" element={<Info_page />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </div>
  );
}

export default App;
