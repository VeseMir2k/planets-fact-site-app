import PlanetStatisticCSS from './PlanetStatistic.module.css'; // Importing CSS module for styling

// Defining the PlanetStatistic component
const PlanetStatistic = ({ title, statistic }) => {
  return (
    // Rendering planet statistic container with appropriate styling
    <div className={PlanetStatisticCSS.statistic}>
      {/* Rendering statistic title */}
      <p className={PlanetStatisticCSS.titleStatistic}>{title}</p>
      {/* Rendering statistic data */}
      <p className={PlanetStatisticCSS.dataStatistic}>{statistic}</p>
    </div>
  );
};

// Exporting PlanetStatistic component as default
export default PlanetStatistic;
