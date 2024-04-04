import { NavLink } from 'react-router-dom';
import LogoCSS from './HeaderLogo.module.css';

const HeaderLogo = () => {
  const handleLogo = () => {
    document.querySelector('.earthColor').classList.add('active');
  };

  return (
    <h2 className={LogoCSS.logo}>
      <NavLink onClick={() => handleLogo()} to="/">
        The Planets
      </NavLink>
    </h2>
  );
};

export default HeaderLogo;
