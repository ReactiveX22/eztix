import React, { createContext, useState, useEffect } from 'react';
import routeService from '../services/routeService';

const RouteContext = createContext();

export const RouteProvider = ({ children }) => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRoutes = async () => {
      try {
        const data = await routeService.fetchRoutes();
        setRoutes(data);
        if (data.length > 0) {
          setSelectedRoute(data[0].id);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadRoutes();
  }, []);

  const value = {
    routes,
    selectedRoute,
    setSelectedRoute,
    loading,
    error,
  };

  return (
    <RouteContext.Provider value={value}>{children}</RouteContext.Provider>
  );
};

export const useRouteContext = () => React.useContext(RouteContext);
