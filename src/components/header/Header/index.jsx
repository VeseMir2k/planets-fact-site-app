import HeaderHamburger from '../HeaderHamburger';
import HeaderLogo from '../HeaderLogo';
import HeaderNavigation from '../HeaderNavigation';
import { header } from './Header.module.css';

const Header = () => {
  return (
    <header className={header}>
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderHamburger />
    </header>
  );
};

export default Header;
