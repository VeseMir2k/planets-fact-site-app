import { NavLink } from 'react-router-dom';
import LogoCSS from './HeaderLogo.module.css';

const HeaderLogo = () => (
  <h2 className={LogoCSS.logo}>
    <NavLink to="/">The Planets</NavLink>
  </h2>
);

export default HeaderLogo;
