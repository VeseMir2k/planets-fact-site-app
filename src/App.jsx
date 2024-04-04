import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import routes from './routes';

const App = () => {
  useEffect(() => {
    document.querySelector('.earthColor').classList.add('active');
  }, []);

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: routes
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
