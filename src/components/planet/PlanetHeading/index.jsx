import PlanetHeadeingCss from './PlanetHeading.module.css'; // Importing CSS module for styling

// Defining the PlanetHeading component
const PlanetHeading = ({ sectionPlanetData, namePlanet }) => {
  return (
    // Rendering planet heading section with appropriate styling
    <div className={PlanetHeadeingCss.heading}>
      {/* Rendering planet title */}
      <h1 className={PlanetHeadeingCss.title}>{namePlanet}</h1>
      {/* Rendering planet description */}
      <p className={PlanetHeadeingCss.description}>{sectionPlanetData.content}</p>
      {/* Rendering source information */}
      <span className={PlanetHeadeingCss.source}>
        Source : {/* Rendering Wikipedia link */}
        <a className={PlanetHeadeingCss.wikipedia} href={sectionPlanetData.source}>
          Wikipedia <img src="./assets/icon-source.svg" alt="" /> {/* Rendering source icon */}
        </a>
      </span>
    </div>
  );
};

// Exporting PlanetHeading component as default
export default PlanetHeading;
