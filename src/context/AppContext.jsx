import { createContext, useEffect, useState } from 'react';

// Creating context for managing color information of planets
export const ColorPlanetsContext = createContext();
// Creating context for managing the state of the navigation menu
export const NavigationOpenContext = createContext();
// Creating context for managing the currently selected section of a planet
export const SectionPlanetContext = createContext();
// Creating context for managing the active state of the overview button
export const OverviewButtonActiveContext = createContext();

// Provider for ColorPlanetsContext
export const ColorPlanetsProvider = ({ children }) => {
  // Array containing color information of planets
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

  // Providing colorPlanets array to its children components
  return (
    <ColorPlanetsContext.Provider value={{ colorPlanets }}>{children}</ColorPlanetsContext.Provider>
  );
};

// Provider for NavigationOpenContext
export const NavigationOpenProvider = ({ children }) => {
  // Checking if the screen size is mobile
  const mobileSize = window.matchMedia('(max-width: 768px)');

  // State variables for managing navigation menu state and mobile device detection
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(mobileSize.matches);

  // Function to update isMobile state when the screen is resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(mobileSize.matches);
      // Closing the navigation menu if the screen is resized and not mobile
      if (!isMobile) {
        document.body.classList.remove('overflowHidden');
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile, mobileSize]);

  // Function to toggle navigation menu state
  const toggleOpen = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // Function to handle overflow scrolling on mobile devices
  const toggleOverflowHidden = () => {
    if (!isOpen) {
      document.body.classList.add('overflowHidden');
    } else {
      document.body.classList.remove('overflowHidden');
    }
  };

  // Providing navigation menu state and mobile device detection to its children components
  return (
    <NavigationOpenContext.Provider value={{ isOpen, isMobile, toggleOpen, toggleOverflowHidden }}>
      {children}
    </NavigationOpenContext.Provider>
  );
};

// Provider for SectionPlanetContext
export const SectionPlanetProvider = ({ children }) => {
  // State variable for managing the currently selected section of a planet
  const [selectedSectionPlanet, setSelectedSectionPlanet] = useState('overview');

  // Function to set the selected section to overview
  const setSelectedSectionPlanetOverview = () => {
    setSelectedSectionPlanet('overview');
  };

  // Providing selected section state and function to set overview section to its children components
  return (
    <SectionPlanetContext.Provider
      value={{ selectedSectionPlanet, setSelectedSectionPlanet, setSelectedSectionPlanetOverview }}>
      {children}
    </SectionPlanetContext.Provider>
  );
};

// Provider for OverviewButtonActiveContext
export const OverviewButtonActiveProvider = ({ children }) => {
  // State variable for managing the active state of the overview button
  const [activeOverviewButton, setActiveOverviewButton] = useState('overviewBtn');

  // Adding 'active' class to the overview button when it mounts or updates
  useEffect(() => {
    document.querySelector(`.${activeOverviewButton}`).classList.add('active');
  }, [activeOverviewButton]);

  // Providing active state of the overview button to its children components
  return (
    <OverviewButtonActiveContext.Provider value={{ activeOverviewButton, setActiveOverviewButton }}>
      {children}
    </OverviewButtonActiveContext.Provider>
  );
};
