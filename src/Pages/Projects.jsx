// import React, { useState } from 'react';
// import "../Style/Project.css";

// import ProjectNavigation from "../components/ProjectNavigation";
// import UiProjects from "../components/UiProjects";
// import WebProjects from "../components/WebProjects";
// import ProjectFooter from "../components/ProjectFooter";


// const Projects = () => {
//   return (
//     <div>
//       <section id="projects" className="projects">
//         <h1>See My Works Which Will Amaze You!</h1>
//         <ProjectNavigation/>
        
//         <ProjectFooter/>
        
//       </section>
//     </div>
//   )
// }

// export default Projects


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Project.css";

import ProjectNavigation from "../components/ProjectNavigation";
import UiProjects from "../components/UiProjects";
import WebProjects from "../components/WebProjects";
import AllProjects from "../components/AllProjects";
import ProjectFooter from "../components/ProjectFooter";

const Projects = () => {
  const [projectType, setProjectType] = useState('all');

  return (
    <div>
      <section id="projects" className="projects">
        <ProjectNavigation setProjectType={setProjectType} />
        {projectType === 'all' && <AllProjects />}
        {projectType === 'ui' && <UiProjects />}
        {projectType === 'web' && <WebProjects />}
        <ProjectFooter />
      </section>
    </div>
  )
}

export default Projects;
