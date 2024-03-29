import classNames from 'classnames';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavigationOpenContext,
  OverviewButtonActiveContext,
  SectionPlanetContext
} from '../../../context/AppContext';
import { dot, iconChevron, navLink } from './HeaderNavigationLink.module.css';

const HeaderNavigationLink = ({ pathConstant, PathConstants, dotColor }) => {
  const { toggleOpen } = useContext(NavigationOpenContext);
  const { setSelectedSectionPlanetOverview } = useContext(SectionPlanetContext);
  const { setActiveOverviewButton } = useContext(OverviewButtonActiveContext);
  const dotBackground = `var(--${dotColor})`;
  const overviewPlanetButtonClass = `${pathConstant.toLowerCase()}ColorBtn`;

  const handleNavLink = () => {
    toggleOpen();
    setSelectedSectionPlanetOverview();
    setActiveOverviewButton(overviewPlanetButtonClass);
  };

  return (
    <NavLink
      onClick={() => handleNavLink()}
      className={classNames(navLink, dotColor)}
      to={PathConstants}>
      <span className={dot} style={{ background: `${dotBackground}` }}></span>
      {pathConstant}
      <img className={iconChevron} src="./assets/icon-chevron.svg" alt="icon chevron" />
    </NavLink>
  );
};

export default HeaderNavigationLink;
