// Importing necessary components and styles
import HeaderHamburger from '../HeaderHamburger'; // Importing the hamburger menu component
import HeaderLogo from '../HeaderLogo'; // Importing the logo component
import HeaderNavigation from '../HeaderNavigation'; // Importing the navigation component
import HeaderCSS from './Header.module.css'; // Importing the CSS module for styling

// Defining the Header component
const Header = () => {
  return (
    // Rendering the header section with the appropriate class name from the CSS module
    <header className={HeaderCSS.header}>
      <HeaderLogo /> {/* Rendering the logo component */}
      <HeaderNavigation /> {/* Rendering the navigation component */}
      <HeaderHamburger /> {/* Rendering the hamburger menu component */}
    </header>
  );
};

// Exporting the Header component as default
export default Header;
