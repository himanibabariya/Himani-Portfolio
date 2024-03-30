import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from "./components/Education";
import Contact from "./components/Contact";

// import Laptop from "../assets/images/laptop.png";
import Laptop from "./assets/images/laptop.png";
import Project1 from "./assets/videos/project1.mp4";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
