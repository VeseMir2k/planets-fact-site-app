import { description, heading, source, title } from './PlanetHeading.module.css';

const PlanetHeading = ({ sectionPlanetData, namePlanet }) => {
  return (
    <div className={heading}>
      <h1 className={title}>{namePlanet}</h1>
      <p className={description}>{sectionPlanetData.content}</p>
      <span className={source}>
        Source:
        <a href={sectionPlanetData.source}>
          Wikipedia <img src="./assets/icon-source.svg" alt="" />
        </a>
      </span>
    </div>
  );
};

export default PlanetHeading;
