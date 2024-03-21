const PlanetNavigationButton = ({ name, setSectionPlanet, section }) => {
  const handleButton = () => {
    setSectionPlanet(section);
  };

  return <button onClick={() => handleButton()}>{name}</button>;
};

export default PlanetNavigationButton;
