import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from "./Pages/About";
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Contact from "./Pages/Contact";
import UiProjects from "./components/UiProjects";
import WebProjects from "./components/WebProjects";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProjectNavigation from "./components/ProjectNavigation";


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        {/* <ProjectNavigation/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allProjects" element={<Projects />} />
          
          <Route path="/uiProjects" element={<UiProjects />} />
          <Route path="/webProjects" element={<WebProjects />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
