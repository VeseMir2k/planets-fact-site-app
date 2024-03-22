import PathConstants from '../../../routes/PathConstants';
import { useColorPlanets } from '../../context/AppContext';
import HeaderNavigationLink from '../HeaderNavigationLink';
import { nav } from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  const colorPlanets = useColorPlanets();

  const links = Object.keys(PathConstants).map(
    (pathConstant, index) =>
      pathConstant === 'HOME' || (
        <HeaderNavigationLink
          key={pathConstant}
          pathConstant={pathConstant}
          PathConstants={PathConstants[pathConstant]}
          dotColor={colorPlanets[index - 1]}
        />
      )
  );

  return <nav className={nav}>{links}</nav>;
};

export default HeaderNavigation;
