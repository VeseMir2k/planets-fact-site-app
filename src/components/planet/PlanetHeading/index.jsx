import PlanetHeadeingCss from './PlanetHeading.module.css';

const PlanetHeading = ({ sectionPlanetData, namePlanet }) => {
  return (
    <div className={PlanetHeadeingCss.heading}>
      <h1 className={PlanetHeadeingCss.title}>{namePlanet}</h1>
      <p className={PlanetHeadeingCss.description}>{sectionPlanetData.content}</p>
      <span className={PlanetHeadeingCss.source}>
        Source :{' '}
        <a className={PlanetHeadeingCss.wikipedia} href={sectionPlanetData.source}>
          Wikipedia <img src="./assets/icon-source.svg" alt="" />
        </a>
      </span>
    </div>
  );
};

export default PlanetHeading;
