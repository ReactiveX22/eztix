import { useState } from 'react';
import coachService from '../services/coachService';
import { useRouteContext } from '../contexts/RouteContext';
import CoachInfo from './CoachInfo';

const CoachForm = () => {
  const [price, setPrice] = useState(800);
  const [departureTime, setDepartureTime] = useState('2024-08-12T08:00');
  const [newCoach, setNewCoach] = useState(null);

  const { selectedRoute } = useRouteContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formattedDepartureTime = departureTime.replace('T', ' ') + ':00';

      const coach = {
        price,
        departure_time: formattedDepartureTime,
        route_id: selectedRoute,
      };

      const newCoach1 = await coachService.createCoach(coach);
      setNewCoach(newCoach1);
      console.log(newCoach);
    } catch (error) {
      console.error('Creating coach failed', error);
    }
  };

  return (
    <div className='flex flex-col gap-10 px-2'>
      <div className='flex flex-col gap-4'>
        <h1 className='text-base font-bold'>Enter Coach Info</h1>
        <form
          onSubmit={handleSubmit}
          className='flex w-full flex-col items-center gap-3 text-start text-sm'
        >
          <div className='flex w-full items-center justify-between gap-3'>
            <label htmlFor='price' className='block text-sm font-medium'>
              Price
            </label>
            <input
              type='text'
              id='price'
              className='inputs w-[12rem]'
              placeholder='800'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div className='flex w-full items-center gap-3'>
            <label
              htmlFor='departureTime'
              className='block text-sm font-medium'
            >
              Departure Time
            </label>
            <input
              type='datetime-local'
              id='departureTime'
              className='inputs w-[12rem] dark:[color-scheme:dark]'
              value={departureTime}
              onChange={(e) => setDepartureTime(e.target.value)}
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
        <CoachInfo coach={newCoach?.[0]} />
      </div>
    </div>
  );
};

export default CoachForm;
