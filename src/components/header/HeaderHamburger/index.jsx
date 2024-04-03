import { Sling as Hamburger } from 'hamburger-react'; // Importing the Hamburger component from 'hamburger-react'
import { useContext } from 'react'; // Importing the useContext hook from React
import { NavigationOpenContext } from '../../../context/AppContext'; // Importing the NavigationOpenContext from the AppContext context
import HamburgerCSS from './HeaderHamburger.module.css'; // Importing the CSS module for styling the Hamburger component

// Defining the HeaderHamburger component
const HeaderHamburger = () => {
  // Destructuring values from the context
  const { isOpen, isMobile, toggleOpen, toggleOverflowHidden } = useContext(NavigationOpenContext);

  return (
    // Rendering a div element which toggles the overflow hidden state for mobile devices
    <div onClick={isMobile ? toggleOverflowHidden : null} className={HamburgerCSS.hamburger}>
      {/* Rendering the Hamburger component */}
      <Hamburger size={24} toggled={isOpen} toggle={toggleOpen} />
    </div>
  );
};

// Exporting the HeaderHamburger component as default
export default HeaderHamburger;
