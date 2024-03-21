import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import planets from '../../../data/planets.json';
import PlanetImage from '../PlanetImage';
import PlanetNavigation from '../PlanetNavigation';
import PlanetHeading from '../PlanetHeading';
import PlanetStatistics from '../PlanetStatistics';

const Planet = () => {
  const [sectionPlanet, setSectionPlanet] = useState('overview');
  const location = useLocation();
  const locationPathName = location.pathname === '/' ? 'earth' : location.pathname.substring(1);

  const planetData = planets.filter((planet) => planet.name.toLowerCase() == locationPathName);

  return (
    <section className="absolute top-[75px] md:static">
      <PlanetHeading
        namePlanet={planetData[0].name}
        sectionPlanetData={planetData[0][sectionPlanet]}
      />
      <PlanetImage sectionPlanet={sectionPlanet} imageData={planetData[0].images} />
      <PlanetNavigation setSectionPlanet={setSectionPlanet} />
      <PlanetStatistics planetData={planetData} />
    </section>
  );
};

export default Planet;
