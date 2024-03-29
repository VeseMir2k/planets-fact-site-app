import classNames from 'classnames';
import { useContext } from 'react';
import { SectionPlanetContext } from '../../../context/AppContext';
import { button } from './PlanetNavigationButton.module.css';

const PlanetNavigationButton = ({ name, section, namePlanet }) => {
  const { setSelectedSectionPlanet } = useContext(SectionPlanetContext);

  const namePlanetBtn = `${namePlanet.toLowerCase()}ColorBtn`;

  const nameSectionBtn = `${name.toLowerCase()}Btn`;

  const handleButton = (event) => {
    const buttons = document.querySelectorAll(`.${namePlanetBtn}`);
    buttons.forEach((button) => button.classList.remove('active'));
    setSelectedSectionPlanet(section);
    event.target.classList.add('active');
  };

  return (
    <button
      className={classNames(button, namePlanetBtn, nameSectionBtn)}
      onClick={(event) => handleButton(event)}>
      {name}
    </button>
  );
};

export default PlanetNavigationButton;
