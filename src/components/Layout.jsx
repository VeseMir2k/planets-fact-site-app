import { ColorPlanetsContext } from './context/AppContext';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
// import { useState } from 'react';

const Layout = () => {
  // const [colorPlanets, setColorPlanet] = useState('');
  const colorPlanets = [
    'white',
    'backgroundColor',
    'borderColor',
    'textColor1',
    'textColor2',
    'mercuryColor',
    'venusColor',
    'earthColor',
    'marsColor',
    'jupiterColor',
    'saturnColor',
    'uranusColor',
    'neptuneColor'
  ];

  return (
    <ColorPlanetsContext.Provider value={{ colorPlanets }}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </ColorPlanetsContext.Provider>
  );
};

export default Layout;
