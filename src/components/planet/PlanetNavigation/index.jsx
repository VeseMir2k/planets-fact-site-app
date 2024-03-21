import PlanetNavigationButton from '../PlanetNavigationButton';

const PlanetNavigation = ({ setSectionPlanet }) => {
  const sectionsPlanet = ['overview', 'structure', 'geology'];
  const buttonNames = ['Overview', 'Structure', 'Surface'];

  const buttons = sectionsPlanet.map((section, index) => (
    <PlanetNavigationButton
      key={index}
      section={section}
      setSectionPlanet={setSectionPlanet}
      name={buttonNames[index]}
    />
  ));

  return <div>{buttons}</div>;
};

export default PlanetNavigation;
