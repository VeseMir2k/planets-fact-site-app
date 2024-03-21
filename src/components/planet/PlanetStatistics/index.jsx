import PlanetStatistic from '../PlanetStatistic';

const PlanetStatistics = ({ planetData }) => {
  const sectionStatistics = ['rotation', 'revolution', 'radius', 'temperature'];

  const statistics = sectionStatistics.map((statistic, index) => (
    <PlanetStatistic key={index} statistic={planetData[0][statistic]} name={statistic} />
  ));

  return <div>{statistics}</div>;
};

export default PlanetStatistics;
