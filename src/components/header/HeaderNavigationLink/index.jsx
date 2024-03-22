import { NavLink } from 'react-router-dom';
import { navLink } from './HeaderNavigationLink.module.css';

const HeaderNavigationLink = ({ idx, PathConstants }) => (
  <NavLink className={navLink} to={PathConstants}>
    <span></span>
    {idx}
    <img src="./assets/icon-chevron.svg" alt="" />
  </NavLink>
);

export default HeaderNavigationLink;
