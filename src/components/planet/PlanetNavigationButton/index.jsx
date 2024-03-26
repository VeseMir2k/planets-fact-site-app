import { button } from './PlanetNavigationButton.module.css';

const PlanetNavigationButton = ({ name, setSectionPlanet, section }) => {
  const handleButton = () => {
    setSectionPlanet(section);
  };

  return (
    <button className={button} onClick={() => handleButton()}>
      {name}
    </button>
  );
};

export default PlanetNavigationButton;
