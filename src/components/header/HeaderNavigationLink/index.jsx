import { NavLink } from 'react-router-dom';
import { dot, iconChevron, navLink } from './HeaderNavigationLink.module.css';

const HeaderNavigationLink = ({ pathConstant, PathConstants, dotColor }) => {
  const dotBackground = `var(--${dotColor})`;
  return (
    <NavLink className={`${navLink} ${dotColor}`} to={PathConstants}>
      <span className={dot} style={{ background: `${dotBackground}` }}></span>
      {pathConstant}
      <img className={iconChevron} src="./assets/icon-chevron.svg" alt="icon chevron" />
    </NavLink>
  );
};

export default HeaderNavigationLink;
