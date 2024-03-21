import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import Layout from './components/Layout';
import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
