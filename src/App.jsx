import './App.css'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import About from "./Pages/About";
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import Education from "./Pages/Education";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
