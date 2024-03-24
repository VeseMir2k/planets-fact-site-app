import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { NavigationOpenContext } from '../../context/AppContext';
import { dot, iconChevron, navLink } from './HeaderNavigationLink.module.css';

const HeaderNavigationLink = ({ pathConstant, PathConstants, dotColor }) => {
  const { toggleOpen } = useContext(NavigationOpenContext);
  const dotBackground = `var(--${dotColor})`;

  return (
    <NavLink onClick={toggleOpen} className={`${navLink} ${dotColor}`} to={PathConstants}>
      <span className={dot} style={{ background: `${dotBackground}` }}></span>
      {pathConstant}
      <img className={iconChevron} src="./assets/icon-chevron.svg" alt="icon chevron" />
    </NavLink>
  );
};

export default HeaderNavigationLink;
