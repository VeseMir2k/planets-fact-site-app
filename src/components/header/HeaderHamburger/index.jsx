import { Sling as Hamburger } from 'hamburger-react';
import { useContext } from 'react';
import { NavigationOpenContext } from '../../../context/AppContext';
import HamburgerCSS from './HeaderHamburger.module.css';

const HeaderHamburger = () => {
  const { isOpen, toggleOpen, toggleOverflowHidden } = useContext(NavigationOpenContext);

  return (
    <div onClick={toggleOverflowHidden} className={HamburgerCSS.hamburger}>
      <Hamburger size={24} toggled={isOpen} toggle={toggleOpen} />
    </div>
  );
};

export default HeaderHamburger;
