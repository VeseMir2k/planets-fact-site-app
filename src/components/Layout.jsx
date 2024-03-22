import { Outlet } from 'react-router-dom';
import { ColorPlanetsProvider } from './context/AppContext';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <ColorPlanetsProvider>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ColorPlanetsProvider>
  );
};

export default Layout;
