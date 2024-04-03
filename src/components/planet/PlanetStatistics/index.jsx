import PlanetStatistic from '../PlanetStatistic'; // Importing PlanetStatistic component
import PlanetStatisticsCSS from './PlanetStatistics.module.css'; // Importing CSS module for styling

// Defining the PlanetStatistics component
const PlanetStatistics = ({ planetData }) => {
  // Array containing titles for statistics
  const titleStatistics = ['rotation time', 'revolution time', 'radius', 'temperature temp.'];
  // Array containing section names for statistics
  const sectionStatistics = ['rotation', 'revolution', 'radius', 'temperature'];

  // Mapping over sectionStatistics array to render PlanetStatistic components
  const statistics = sectionStatistics.map((statistic, index) => (
    <PlanetStatistic
      key={index} // Setting key prop for each statistic
      statistic={planetData[0][statistic]} // Passing statistic data to PlanetStatistic component
      title={titleStatistics[index]} // Passing statistic title to PlanetStatistic component
    />
  ));

  // Rendering statistics container with appropriate styling
  return <div className={PlanetStatisticsCSS.statisticsContainer}>{statistics}</div>;
};

// Exporting PlanetStatistics component as default
export default PlanetStatistics;
