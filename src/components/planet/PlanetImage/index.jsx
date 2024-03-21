const PlanetImage = ({ imageData, sectionPlanet }) => {
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

  return (
    <div>
      <img src={imageUrl} alt="" />
      {sectionPlanet === 'geology' && <img src={imageData.geology} />}
    </div>
  );
};

export default PlanetImage;
