import { useEffect, useState } from 'react';
import routeService from '../services/routeService';

const RoutesPage = () => {
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadRoutes = async () => {
      try {
        const data = await routeService.fetchRoutes();
        setRoutes(data);
      } catch (error) {
        // err
      } finally {
        setLoading(false);
      }
    };

    loadRoutes();
  }, []);

  return (
    <div className='flex w-full items-center'>
      <div className='mx-auto'>
        <h1>Select A Route</h1>
        <ul>
          {routes.map((route) => (
            <li key={route.id}>{route.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RoutesPage;
