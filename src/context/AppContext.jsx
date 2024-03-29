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
  const [selectedSectionPlanet, setSelectedSectionPlanet] = useState('overview');

  const setSelectedSectionPlanetOverview = () => {
    setSelectedSectionPlanet('overview');
  };

  return (
    <SectionPlanetContext.Provider
      value={{ selectedSectionPlanet, setSelectedSectionPlanet, setSelectedSectionPlanetOverview }}>
      {children}
    </SectionPlanetContext.Provider>
  );
};

export const OverviewButtonActiveProvider = ({ children }) => {
  const [activeOverviewButton, setActiveOverviewButton] = useState('overviewBtn');

  useEffect(() => {
    document.querySelector(`.${activeOverviewButton}`).classList.add('active');
  }, [activeOverviewButton]);

  return (
    <OverviewButtonActiveContext.Provider value={{ activeOverviewButton, setActiveOverviewButton }}>
      {children}
    </OverviewButtonActiveContext.Provider>
  );
};
