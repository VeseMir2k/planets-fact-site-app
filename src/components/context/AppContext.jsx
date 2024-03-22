import { createContext, useContext } from 'react';

const ColorPlanetsContext = createContext();

export const useColorPlanets = () => useContext(ColorPlanetsContext);

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
    <ColorPlanetsContext.Provider value={colorPlanets}>{children}</ColorPlanetsContext.Provider>
  );
};
