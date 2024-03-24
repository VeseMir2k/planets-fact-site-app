import { createContext, useState } from 'react';

export const ColorPlanetsContext = createContext();
export const NavigationOpenContext = createContext();

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
