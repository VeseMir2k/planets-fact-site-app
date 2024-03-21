/* eslint-disable react/prop-types */
const PlanetHeading = ({ sectionPlanetData, namePlanet }) => {
  return (
    <div>
      <h1>{namePlanet}</h1>
      <p>{sectionPlanetData.content}</p>
      <span>
        Source:
        <a href={sectionPlanetData.source}>
          Wikipedia <img src="./assets/icon-source.svg" alt="" />
        </a>
      </span>
    </div>
  );
};

export default PlanetHeading;
