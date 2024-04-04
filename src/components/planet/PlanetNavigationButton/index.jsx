import classNames from 'classnames'; // Importing classNames library for conditional classnames
import { useContext } from 'react'; // Importing useContext hook from React
import { SectionPlanetContext } from '../../../context/AppContext'; // Importing SectionPlanetContext from AppContext
import PlanetNavigationButtonCSS from './PlanetNavigationButton.module.css'; // Importing CSS module for styling

// Defining the PlanetNavigationButton component
const PlanetNavigationButton = ({ name, section, namePlanet, index }) => {
  // Using SectionPlanetContext to access setSelectedSectionPlanet
  const { setSelectedSectionPlanet } = useContext(SectionPlanetContext);

  // Generating class name for planet button
  const namePlanetBtn = `${namePlanet.toLowerCase()}ColorBtn`;
  // Generating class name for section button
  const nameSectionBtn = `${name.toLowerCase()}Btn`;

  // Function to handle button click
  const handleButton = (event) => {
    // Removing 'active' class from all buttons with the same planet color
    const buttons = document.querySelectorAll(`.${namePlanetBtn}`);
    buttons.forEach((button) => button.classList.remove('active'));
    // Setting selected section planet
    setSelectedSectionPlanet(section);
    // Adding 'active' class to the clicked button
    event.target.classList.add('active');
  };

  return (
    // Rendering button with appropriate styling and onClick handler
    <button
      className={classNames(PlanetNavigationButtonCSS.button, namePlanetBtn, nameSectionBtn)} // Applying classnames
      onClick={(event) => handleButton(event)}>
      {/* Handling button click */}
      <span className={PlanetNavigationButtonCSS.indexButton}>0{index + 1}</span>
      {name} {/* Rendering button name */}
    </button>
  );
};

// Exporting PlanetNavigationButton component as default
export default PlanetNavigationButton;
