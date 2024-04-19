// import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';

const ProjectNavigation = ({ setProjectType }) => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState('all');

  const handleNavigation = (type, button) => {
    setProjectType(type);
    setActiveButton(button);
  }

  return (
    <div>
      <div className="project-nav">
        <button className={activeButton === 'all' ? 'active' : ''} onClick={() => handleNavigation('all', 'all')}>
         All
        </button>
        <button className={activeButton === 'ui' ? 'active' : ''} onClick={() => handleNavigation('ui', 'ui')}>
        UI/UX
        </button>
        <button  className={activeButton === 'web' ? 'active' : ''} onClick={() => handleNavigation('web', 'web')}>
        Web Application
        </button>
      </div>
    </div>
  )
}

export default ProjectNavigation

// import React from 'react'
// import { Link, useLocation } from 'react-router-dom';

// const ProjectNavigation = ({ setProjectType }) => {
//   const location = useLocation();
  
//   const handleNavigation = (type) => {
//     setProjectType(type);
//   }

//   return (
//     <div>
//       <div className="project-nav">

//         <a className={location.pathname === '/allProjects' ? 'active' : ''} href="/allProjects" onClick={() => handleNavigation('all')}>
//           All
//         </a>

//         <a className={location.pathname === '/uiProjects' ? 'active' : ''} href="/uiProjects">
//           UI/UX
//         </a>

//         <a className={location.pathname === '/webProjects' ? 'active' : ''} href="/webProjects">
//           Web Application
//         </a>
//       </div>
//     </div>
//   )
// }

// export default ProjectNavigation
