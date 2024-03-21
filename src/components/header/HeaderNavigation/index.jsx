import { NavLink } from 'react-router-dom';
import PathConstants from '../../../routes/PathConstants';
import { nav, navLink } from './HeaderNavigation.module.css';

const HeaderNavigation = () => {
  const colors = [
    'bg-mercuryColor',
    'bg-venusColor',
    'bg-earthColor',
    'bg-marsColor',
    'bg-jupiterColor',
    'bg-saturnColor',
    'bg-uranusColor',
    'bg-neptuneColor'
  ];

  const links = Object.keys(PathConstants).map(
    (key, index) =>
      key === 'HOME' || (
        <NavLink className={navLink} key={key} to={PathConstants[key]}>
          <span
            className={`${colors[index - 1]} mr-[25px] size-[20px] rounded-[50%] md:hidden`}></span>{' '}
          {key}
          <img
            className="absolute right-[8px] self-center md:hidden"
            src="./assets/icon-chevron.svg"
            alt=""
          />
        </NavLink>
      )
  );

  return <nav className={nav}>{links}</nav>;
};

export default HeaderNavigation;
