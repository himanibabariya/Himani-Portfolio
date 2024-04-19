import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const ProjectNavigation = ({ setProjectType }) => {
  const location = useLocation();

  const handleNavigation = (type) => {
    setProjectType(type);
  }

  return (
    <div>
      <div className="project-nav">
        <a className={location.pathname === '/allProjects' ? 'active' : ''} onClick={() => handleNavigation('all')}>
         All
        </a>
        <a className={location.pathname === '/uiProjects' ? 'active' : ''}  onClick={() => handleNavigation('ui')}>
        UI/UX
        </a>
        <a className={location.pathname === '/webProjects' ? 'active' : ''}  onClick={() => handleNavigation('web')}>
        Web Application
        </a>
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
