import HeaderNavigationLink from '../HeaderNavigationLink';
import PathConstants from '../../../routes/PathConstants';
import { nav } from './HeaderNavigation.module.css';
import { useContext } from 'react';
import { ColorPlanetsContext } from '../../context/AppContext';

const HeaderNavigation = () => {
  const colorPlanets = useContext(ColorPlanetsContext);

  const links = Object.keys(PathConstants).map(
    (key) =>
      key === 'HOME' || (
        <HeaderNavigationLink key={key} idx={key} PathConstants={PathConstants[key]} />
      )
  );

  return (
    <nav className={nav}>
      {links}
      {console.log(colorPlanets)}
    </nav>
  );
};

export default HeaderNavigation;
