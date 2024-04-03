import classNames from 'classnames'; // Importing classNames library for conditional classnames
import { useContext } from 'react'; // Importing useContext hook from React
import { NavLink } from 'react-router-dom'; // Importing NavLink component from react-router-dom
import {
  NavigationOpenContext,
  OverviewButtonActiveContext,
  SectionPlanetContext
} from '../../../context/AppContext'; // Importing context from AppContext
import NavigationLinkCSS from './HeaderNavigationLink.module.css'; // Importing CSS module for styling

// Defining the HeaderNavigationLink component
const HeaderNavigationLink = ({ pathConstant, PathConstants, dotColor }) => {
  // Using NavigationOpenContext to access isMobile, toggleOpen, and toggleOverflowHidden
  const { isMobile, toggleOpen, toggleOverflowHidden } = useContext(NavigationOpenContext);
  // Using SectionPlanetContext to access setSelectedSectionPlanetOverview
  const { setSelectedSectionPlanetOverview } = useContext(SectionPlanetContext);
  // Using OverviewButtonActiveContext to access setActiveOverviewButton
  const { setActiveOverviewButton } = useContext(OverviewButtonActiveContext);
  // Creating dotBackground variable to set dot background color based on dotColor prop
  const dotBackground = `var(--${dotColor})`;
  // Creating overviewPlanetButtonClass to set class name based on pathConstant
  const overviewPlanetButtonClass = `${pathConstant.toLowerCase()}ColorBtn`;

  // Function to handle NavLink click
  const handleNavLink = () => {
    // If it's in mobile view, toggle overflow hidden state
    if (isMobile) {
      toggleOverflowHidden();
    }
    // Toggle navigation menu state
    toggleOpen();
    // Set selected section planet overview
    setSelectedSectionPlanetOverview();
    // Set active overview button
    setActiveOverviewButton(overviewPlanetButtonClass);
  };

  return (
    // Rendering NavLink with appropriate props and styles
    <NavLink
      onClick={() => handleNavLink()} // Handling NavLink click
      className={classNames(NavigationLinkCSS.navLink, dotColor)} // Applying classnames
      to={PathConstants}>
      {/* Setting NavLink destination */}
      <span className={NavigationLinkCSS.dot} style={{ background: `${dotBackground}` }}></span>
      {/* Rendering dot with background color */}
      {pathConstant} {/* Rendering pathConstant */}
      <img
        className={NavigationLinkCSS.iconChevron}
        src="./assets/icon-chevron.svg"
        alt="icon chevron" // Adding alt text for accessibility
      />
    </NavLink>
  );
};

// Exporting HeaderNavigationLink component as default
export default HeaderNavigationLink;
