import React from 'react';
import UiProjects from '../UiProjects/UiProjects';
import WebProjects from '../WebProjects/WebProjects';
import AndroidProjects from '../MobileApp/AndroidProjects';

const AllProjects = () => {
  return (
    <div>
      <UiProjects />
      <WebProjects />
      <AndroidProjects/>
    </div>
  );
}

export default AllProjects;
