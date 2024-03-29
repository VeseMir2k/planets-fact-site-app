import PlanetStatistic from '../PlanetStatistic';
import PlanetStatisticsCSS from './PlanetStatistics.module.css';

const PlanetStatistics = ({ planetData }) => {
  const titleStatistics = ['rotation time', 'revolution time', 'radius', 'temperature temp.'];
  const sectionStatistics = ['rotation', 'revolution', 'radius', 'temperature'];

  const statistics = sectionStatistics.map((statistic, index) => (
    <PlanetStatistic
      key={index}
      statistic={planetData[0][statistic]}
      title={titleStatistics[index]}
    />
  ));

  return <div className={PlanetStatisticsCSS.statisticsContainer}>{statistics}</div>;
};

export default PlanetStatistics;
