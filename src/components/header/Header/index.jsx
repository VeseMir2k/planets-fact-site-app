import HeaderHamburger from '../HeaderHamburger';
import HeaderLogo from '../HeaderLogo';
import HeaderNavigation from '../HeaderNavigation';
import HeaderCSS from './Header.module.css';

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <HeaderLogo />
      <HeaderNavigation />
      <HeaderHamburger />
    </header>
  );
};

export default Header;
