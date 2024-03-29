import { Sling as Hamburger } from 'hamburger-react';
import { useContext } from 'react';
import { NavigationOpenContext } from '../../../context/AppContext';
import { hamburger } from './HeaderHamburger.module.css';

const HeaderHamburger = () => {
  const { isOpen, toggleOpen } = useContext(NavigationOpenContext);

  const handleHamburger = () => {
    if (!isOpen) {
      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }
  };

  return (
    <div onClick={handleHamburger} className={hamburger}>
      <Hamburger size={24} toggled={isOpen} toggle={toggleOpen} />
    </div>
  );
};

export default HeaderHamburger;
