import classNames from 'classnames';
import { useContext } from 'react';
import PathConstants from '../../../routes/PathConstants';
import { ColorPlanetsContext, NavigationOpenContext } from '../../context/AppContext';
import HeaderNavigationLink from '../HeaderNavigationLink';
import { nav, openNav } from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  const { colorPlanets } = useContext(ColorPlanetsContext);
  const { isOpen } = useContext(NavigationOpenContext);

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

  return <nav className={classNames(nav, { [openNav]: isOpen })}>{links}</nav>;
};

export default HeaderNavigation;
