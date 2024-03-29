import PlanetStatisticCSS from './PlanetStatistic.module.css';

const PlanetStatistic = ({ title, statistic }) => {
  return (
    <div className={PlanetStatisticCSS.statistic}>
      <p className={PlanetStatisticCSS.titleStatistic}>{title}</p>
      <p className={PlanetStatisticCSS.dataStatistic}>{statistic}</p>
    </div>
  );
};

export default PlanetStatistic;
