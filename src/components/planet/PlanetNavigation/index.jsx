import React from 'react';

import PlanetNavigationButton from '../PlanetNavigationButton';
import { nav } from './PlanetNavigation.module.css';

const PlanetNavigation = ({ namePlanet }) => {
  const sectionsPlanet = ['overview', 'structure', 'geology'];
  const buttonNames = ['Overview', 'Structure', 'Surface'];

  return (
    <div className={nav}>
      {sectionsPlanet.map((section, index) => (
        <PlanetNavigationButton
          key={index}
          namePlanet={namePlanet}
          section={section}
          name={buttonNames[index]}
        />
      ))}
    </div>
  );
};

export default PlanetNavigation;
