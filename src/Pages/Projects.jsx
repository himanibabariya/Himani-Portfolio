
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Style/Project.css";

import ProjectNavigation from "../components/ProjectNavigation/ProjectNavigation";
import UiProjects from "../components/UiProjects/UiProjects";
import WebProjects from "../components/WebProjects/WebProjects";
import AllProjects from "../components/AllProjects/AllProjects";
import ProjectFooter from "../components/ProjectFooter/ProjectFooter";

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
