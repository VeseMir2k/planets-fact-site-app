import { Outlet } from 'react-router-dom';
import { ColorPlanetsProvider, NavigationOpenProvider } from './context/AppContext';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <ColorPlanetsProvider>
      <NavigationOpenProvider>
        <Header />
      </NavigationOpenProvider>
      <main>
        <Outlet />
      </main>
      <Footer />
    </ColorPlanetsProvider>
  );
};

export default Layout;
