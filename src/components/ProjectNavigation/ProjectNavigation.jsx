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
        Web App
        </button>

        <button  className={activeButton === 'android' ? 'active' : ''} onClick={() => handleNavigation('android', 'android')}>
        Mobile App
        </button>


      </div>
    </div>
  )
}

export default ProjectNavigation

