import { Outlet } from 'react-router-dom';
import {
  ColorPlanetsProvider,
  NavigationOpenProvider,
  OverviewButtonActiveProvider,
  SectionPlanetProvider
} from '../context/AppContext';
import Footer from './footer/Footer';
import Header from './header/Header';

const Layout = () => {
  return (
    <ColorPlanetsProvider>
      <SectionPlanetProvider>
        <OverviewButtonActiveProvider>
          <NavigationOpenProvider>
            <Header />
          </NavigationOpenProvider>
          <main>
            <Outlet />
          </main>
        </OverviewButtonActiveProvider>
      </SectionPlanetProvider>
      <Footer />
    </ColorPlanetsProvider>
  );
};

export default Layout;
