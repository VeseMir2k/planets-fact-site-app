import React from 'react'; // Importing React library
import PlanetNavigationButton from '../PlanetNavigationButton'; // Importing PlanetNavigationButton component
import PlanetNavigationCSS from './PlanetNavigation.module.css'; // Importing CSS module for styling

// Defining the PlanetNavigation component
const PlanetNavigation = ({ namePlanet }) => {
  // Array containing sections of the planet
  const sectionsPlanet = ['overview', 'structure', 'geology'];
  // Array containing button names for each section
  const buttonNames = ['Overview', 'Structure', 'Surface'];

  return (
    // Rendering planet navigation container with appropriate styling
    <div className={PlanetNavigationCSS.nav}>
      {/* Mapping over sectionsPlanet array to render PlanetNavigationButton components */}
      {sectionsPlanet.map((section, index) => (
        <PlanetNavigationButton
          key={index} // Setting key prop for each button
          namePlanet={namePlanet} // Passing planet name to PlanetNavigationButton component
          section={section} // Passing section name to PlanetNavigationButton component
          name={buttonNames[index]} // Passing button name to PlanetNavigationButton component
          index={index}
        />
      ))}
    </div>
  );
};

// Exporting PlanetNavigation component as default
export default PlanetNavigation;
