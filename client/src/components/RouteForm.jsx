import { useState } from 'react';
import routeService from '../services/routeService';

const RouteInfo = ({ route }) => {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='text-base font-bold'>Created Route Info</h1>
      <div className='flex flex-col gap-2 text-start text-sm'>
        <p>RouteID: {route?.id}</p>
        <p>RouteName: {route?.name}</p>
        <p>Start: {route?.start_location}</p>
        <p>End: {route?.end_location}</p>
      </div>
    </div>
  );
};

const CoachForm = () => {
  const [name, setName] = useState('Gazipur-Chittagong');
  const [startLocation, setStartLocation] = useState('Gazipur');
  const [endLocation, setEndLocation] = useState('Chittagong');
  const [newRoute, setNewRoute] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        name,
        start_location: startLocation,
        end_location: endLocation,
      };
      const route = await routeService.createRoute(data);
      setNewRoute(route);
    } catch (error) {
      console.error('Creating route failed', error);
    }
  };

  return (
    <div className='flex flex-col gap-10 px-2'>
      <div>
        <h1 className='text-base font-bold'>Enter Coach Info</h1>
        <form
          onSubmit={handleSubmit}
          className='flex w-full flex-col items-center justify-center gap-3 text-start text-sm'
        >
          <div className='flex w-full items-center justify-between gap-3'>
            <label htmlFor='name' className='block text-sm font-medium'>
              Route Name
            </label>
            <input
              type='text'
              id='name'
              className='inputs w-[12rem]'
              placeholder='Gazipur-Chittagong'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='flex w-full items-center justify-between gap-3'>
            <label
              htmlFor='departureTime'
              className='block text-sm font-medium'
            >
              Start Location
            </label>
            <input
              type='text'
              id='departureTime'
              className='inputs w-[12rem]'
              value={startLocation}
              onChange={(e) => setStartLocation(e.target.value)}
              required
            />
          </div>
          <div className='flex w-full items-center justify-between gap-3'>
            <label htmlFor='endLocation' className='block text-sm font-medium'>
              End Location
            </label>
            <input
              type='text'
              id='endLocation'
              className='inputs w-[12rem]'
              value={endLocation}
              onChange={(e) => setEndLocation(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className='mt-3 w-[5rem] rounded-lg bg-primary px-2.5 py-2.5 text-center text-sm font-medium focus:outline-none'
          >
            Submit
          </button>
        </form>
      </div>
      <div>
        <RouteInfo route={newRoute?.[0]} />
      </div>
    </div>
  );
};

export default CoachForm;
