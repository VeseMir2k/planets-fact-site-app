import { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { SectionPlanetContext } from '../../../context/AppContext';
import planets from '../../../data/planets.json';
import PlanetHeading from '../PlanetHeading';
import PlanetImage from '../PlanetImage';
import PlanetNavigation from '../PlanetNavigation';
import PlanetStatistics from '../PlanetStatistics';
import planetCss from './Planet.module.css';

const Planet = () => {
  const { selectedSectionPlanet } = useContext(SectionPlanetContext);
  const location = useLocation();
  const locationPathName = location.pathname === '/' ? 'earth' : location.pathname.substring(1);

  const planetData = planets.filter((planet) => planet.name.toLowerCase() === locationPathName);

  return (
    <section className={planetCss.planet}>
      <PlanetHeading
        namePlanet={planetData[0].name}
        sectionPlanetData={planetData[0][selectedSectionPlanet]}
      />
      <PlanetImage sectionPlanet={selectedSectionPlanet} imageData={planetData[0].images} />
      <PlanetNavigation namePlanet={planetData[0].name} />
      <PlanetStatistics planetData={planetData} />
    </section>
  );
};

export default Planet;
