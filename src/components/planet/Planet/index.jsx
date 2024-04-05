import { useContext } from 'react'; // Importing useContext hook from React
import { useLocation } from 'react-router-dom'; // Importing useLocation hook from react-router-dom
import { SectionPlanetContext } from '../../../context/AppContext'; // Importing SectionPlanetContext from AppContext
import planets from '../../../data/planets.json'; // Importing planet data from JSON file
import PlanetHeading from '../PlanetHeading'; // Importing PlanetHeading component
import PlanetImage from '../PlanetImage'; // Importing PlanetImage component
import PlanetNavigation from '../PlanetNavigation'; // Importing PlanetNavigation component
import PlanetStatistics from '../PlanetStatistics'; // Importing PlanetStatistics component
import PlanetCss from './Planet.module.css'; // Importing CSS module for styling

const Planet = () => {
  // Using SectionPlanetContext to access selectedSectionPlanet
  const { selectedSectionPlanet } = useContext(SectionPlanetContext);
  // Using useLocation hook to get current location
  const location = useLocation();
  // Extracting path name from location
  const locationPathName =
    location.pathname === '/planets-fact-site-app/' ? 'earth' : location.pathname.substring(23);

  // Filtering planetData based on locationPathName
  const planetData = planets.filter((planet) => planet.name.toLowerCase() === locationPathName);

  return (
    // Rendering planet section with appropriate styling
    <section className={PlanetCss.planet}>
      {/* Rendering PlanetHeading component */}
      <PlanetHeading
        namePlanet={planetData[0].name} // Passing planet name to PlanetHeading component
        sectionPlanetData={planetData[0][selectedSectionPlanet]} // Passing section planet data to PlanetHeading component
      />
      {/* Rendering PlanetImage component */}
      <PlanetImage
        sectionPlanet={selectedSectionPlanet} // Passing section planet to PlanetImage component
        namePlanet={planetData[0].name} // Passing planet name to PlanetImage component
        imageData={planetData[0].images} // Passing planet images data to PlanetImage component
      />
      {/* Rendering PlanetNavigation component */}
      <PlanetNavigation namePlanet={planetData[0].name} />
      {/* Passing planet name to PlanetNavigation component */}
      {/* Rendering PlanetStatistics component */}
      <PlanetStatistics planetData={planetData} />
      {/* Passing planet data to PlanetStatistics component */}
    </section>
  );
};

export default Planet;
