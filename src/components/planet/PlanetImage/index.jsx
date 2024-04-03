import PlanetImageCss from './PlanetImage.module.css'; // Importing CSS module for styling

// Defining the PlanetImage component
const PlanetImage = ({ imageData, sectionPlanet, namePlanet }) => {
  // Function to determine the section image based on the sectionPlanet prop
  const setSectionImage = () => {
    if (sectionPlanet === 'overview') {
      return 'planet';
    } else if (sectionPlanet === 'structure') {
      return 'internal';
    } else {
      return 'internal';
    }
  };

  // Setting imageUrl based on the section image
  const imageUrl = imageData[setSectionImage()];
  // Generating class name for planet image
  const planetImage = `${namePlanet.toLowerCase()}Image`;

  return (
    // Rendering planet image container
    <div className={PlanetImageCss.imageContainer}>
      {/* Rendering main planet image */}
      <img className={PlanetImageCss[planetImage]} src={imageUrl} alt="planet" />
      {/* Rendering geology image if sectionPlanet is 'geology' */}
      {sectionPlanet === 'geology' && (
        <img className={PlanetImageCss.geologyImage} src={imageData.geology} alt="planet geology" />
      )}
    </div>
  );
};

// Exporting PlanetImage component as default
export default PlanetImage;
