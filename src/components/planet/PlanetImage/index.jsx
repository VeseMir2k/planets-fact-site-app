import PlanetImageCss from './PlanetImage.module.css';

const PlanetImage = ({ imageData, sectionPlanet, namePlanet }) => {
  const setSectionImage = () => {
    if (sectionPlanet === 'overview') {
      return 'planet';
    } else if (sectionPlanet === 'structure') {
      return 'internal';
    } else {
      return 'internal';
    }
  };

  const imageUrl = imageData[setSectionImage()];
  const planetImage = `${namePlanet.toLowerCase()}Image`;

  return (
    <div className={PlanetImageCss.imageContainer}>
      <img className={PlanetImageCss[planetImage]} src={imageUrl} alt="planet" />
      {sectionPlanet === 'geology' && (
        <img className={PlanetImageCss.geologyImage} src={imageData.geology} alt="planet geology" />
      )}
    </div>
  );
};

export default PlanetImage;
