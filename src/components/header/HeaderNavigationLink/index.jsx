import classNames from 'classnames';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavigationOpenContext,
  OverviewButtonActiveContext,
  SectionPlanetContext
} from '../../../context/AppContext';
import NavigationLinkCSS from './HeaderNavigationLink.module.css';

const HeaderNavigationLink = ({ pathConstant, PathConstants, dotColor }) => {
  const { isMobile, toggleOpen, toggleOverflowHidden } = useContext(NavigationOpenContext);
  const { setSelectedSectionPlanetOverview } = useContext(SectionPlanetContext);
  const { setActiveOverviewButton } = useContext(OverviewButtonActiveContext);
  const dotBackground = `var(--${dotColor})`;
  const overviewPlanetButtonClass = `${pathConstant.toLowerCase()}ColorBtn`;

  const handleNavLink = () => {
    if (isMobile) {
      toggleOverflowHidden();
    }
    toggleOpen();
    setSelectedSectionPlanetOverview();
    setActiveOverviewButton(overviewPlanetButtonClass);
  };

  return (
    <NavLink
      onClick={() => handleNavLink()}
      className={classNames(NavigationLinkCSS.navLink, dotColor)}
      to={PathConstants}>
      <span className={NavigationLinkCSS.dot} style={{ background: `${dotBackground}` }}></span>
      {pathConstant}
      <img
        className={NavigationLinkCSS.iconChevron}
        src="./assets/icon-chevron.svg"
        alt="icon chevron"
      />
    </NavLink>
  );
};

export default HeaderNavigationLink;
