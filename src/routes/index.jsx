import PathConstants from './PathConstants';
import Planet from '../components/planet/Planet';

const routes = [
  { path: PathConstants.HOME, element: <Planet /> },
  { path: PathConstants.MERCURY, element: <Planet /> },
  { path: PathConstants.VENUS, element: <Planet /> },
  { path: PathConstants.EARTH, element: <Planet /> },
  { path: PathConstants.MARS, element: <Planet /> },
  { path: PathConstants.JUPITER, element: <Planet /> },
  { path: PathConstants.SATURN, element: <Planet /> },
  { path: PathConstants.URANUS, element: <Planet /> },
  { path: PathConstants.NEPTUNE, element: <Planet /> }
];

export default routes;
