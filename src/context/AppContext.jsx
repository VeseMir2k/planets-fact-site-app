import { createContext, useEffect, useState } from 'react';

export const ColorPlanetsContext = createContext();
export const NavigationOpenContext = createContext();
export const SectionPlanetContext = createContext();
export const OverviewButtonActiveContext = createContext();

export const ColorPlanetsProvider = ({ children }) => {
  const colorPlanets = [
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
    <ColorPlanetsContext.Provider value={{ colorPlanets }}>{children}</ColorPlanetsContext.Provider>
  );
};

export const NavigationOpenProvider = ({ children }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <NavigationOpenContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </NavigationOpenContext.Provider>
  );
};

export const SectionPlanetProvider = ({ children }) => {
  const [sectionPlanet, setSectionPlanet] = useState('overview');

  const setSectionPlanetOverview = () => {
    setSectionPlanet('overview');
  };

  return (
    <SectionPlanetContext.Provider
      value={{ sectionPlanet, setSectionPlanet, setSectionPlanetOverview }}>
      {children}
    </SectionPlanetContext.Provider>
  );
};

export const OverviewButtonActiveProvider = ({ children }) => {
  const [overviewButtonActive, setOverviewButtonActive] = useState('overviewBtn');

  useEffect(() => {
    document.querySelector(`.${overviewButtonActive}`).classList.add('active');
  }, [overviewButtonActive]);

  return (
    <OverviewButtonActiveContext.Provider value={{ overviewButtonActive, setOverviewButtonActive }}>
      {children}
    </OverviewButtonActiveContext.Provider>
  );
};
