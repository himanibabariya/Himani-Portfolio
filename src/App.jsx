import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from "./components/Education";
import Contact from "./components/Contact";
import {createBrowserRouter, RouterProvider} from "react-router-dom";



function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <><Navbar/><Home/> </>
    },
    {
      path: "/skills",
      element: <><Navbar/><Skills/></>
    },
    {
      path: "/projects",
      element: <><Navbar/><Projects/></>
    },
    {
      path: "/education",
      element: <><Navbar/><Education/></>
    },
    {
      path: "/contact",
      element: <><Navbar/><Contact/></>
    }
])
  return (
    <> 
    
    <RouterProvider router={router} />
    {/* <Home/> */}
    {/* <Skills/> */}
    {/* <Education/> */}
         </>
  )
}

export default App
