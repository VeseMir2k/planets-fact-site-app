import { Outlet } from 'react-router-dom'; // Importing Outlet from react-router-dom to render nested routes
import {
  ColorPlanetsProvider,
  NavigationOpenProvider,
  OverviewButtonActiveProvider,
  SectionPlanetProvider
} from '../context/AppContext'; // Importing context providers from '../context/AppContext'
import Footer from './footer/Footer'; // Importing Footer component
import Header from './header/Header'; // Importing Header component

// Defining the Layout component
const Layout = () => {
  return (
    // Wrapping components with context providers to manage state and share data
    <ColorPlanetsProvider>
      {/* Providing color planets context */}
      <SectionPlanetProvider>
        {/* Providing section planet context */}
        <OverviewButtonActiveProvider>
          {/* Providing overview button active context */}
          <NavigationOpenProvider>
            {/* Providing navigation open context */}
            {/* Rendering Header component */}
            <Header />
          </NavigationOpenProvider>
          {/* Rendering main content */}
          <main>
            <Outlet /> {/* Rendering nested routes */}
          </main>
        </OverviewButtonActiveProvider>
      </SectionPlanetProvider>
      {/* Rendering Footer component */}
      <Footer />
    </ColorPlanetsProvider>
  );
};

// Exporting Layout component as default
export default Layout;
