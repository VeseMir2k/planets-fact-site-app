import classNames from 'classnames'; // Importing classNames library for conditional classnames
import { useContext } from 'react'; // Importing useContext hook from React
import { ColorPlanetsContext, NavigationOpenContext } from '../../../context/AppContext'; // Importing context from AppContext
import PathConstants from '../../../routes/PathConstants'; // Importing PathConstants
import HeaderNavigationLink from '../HeaderNavigationLink'; // Importing HeaderNavigationLink component
import NavigationCSS from './HeaderNavigation.module.css'; // Importing CSS module for styling

const HeaderNavigation = () => {
  // Using ColorPlanetsContext to access colorPlanets state
  const { colorPlanets } = useContext(ColorPlanetsContext);
  // Using NavigationOpenContext to access isOpen state
  const { isOpen } = useContext(NavigationOpenContext);

  // Mapping over PathConstants to create HeaderNavigationLink components
  const links = Object.keys(PathConstants).map(
    (pathConstant, index) =>
      // Checking if pathConstant is 'HOME' or not
      pathConstant === 'HOME' || (
        // Rendering HeaderNavigationLink component with appropriate props
        <HeaderNavigationLink
          key={pathConstant}
          pathConstant={pathConstant}
          PathConstants={PathConstants[pathConstant]}
          dotColor={colorPlanets[index - 1]}
        />
      )
  );

  return (
    // Rendering navigation with conditional classnames based on isOpen state
    <nav className={classNames(NavigationCSS.nav, { [NavigationCSS.openNav]: isOpen })}>
      {links}
    </nav>
  );
};

export default HeaderNavigation;
