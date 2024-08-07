import React, { useEffect } from 'react';
import { useRouteContext } from '../contexts/RouteContext';
import { IconCircle, IconCircleFilled } from '@tabler/icons-react';
import { useCoachContext } from '../contexts/CoachContext';

const RouteList = () => {
  const { routes, selectedRoute, setSelectedRoute, loading, error } =
    useRouteContext();
  const { setSelectedCoach } = useCoachContext();

  if (loading) return <p>Loading routes...</p>;
  if (error) return <p>Error loading routes.</p>;

  useEffect(() => {
    setSelectedCoach(null);
  }, [selectedRoute]);

  return (
    <div className='flex flex-col gap-3 text-end'>
      <h1 className='px-2 text-base font-bold'>Select A Route</h1>
      <ul className='text-sm'>
        {routes.map((route) => (
          <li
            key={route.id}
            onClick={() => setSelectedRoute(route.id)}
            className={`cursor-pointer p-2 ${
              selectedRoute === route.id ? 'text-neutral' : 'text-zinc-600'
            }`}
          >
            <div className='inline-flex items-center gap-2'>
              {route.name}{' '}
              {selectedRoute === route.id ? (
                <IconCircleFilled
                  size={13}
                  stroke={1}
                  className='text-primary'
                />
              ) : (
                <IconCircle size={13} stroke={1} />
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RouteList;
