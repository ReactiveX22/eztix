import React from 'react';
import BusSeating from './BusSeating';

const Coach = () => {
  return (
    <div className='flex flex-col gap-4'>
      <h1 className='text-base font-bold'>Select Your Seats</h1>
      <BusSeating />
    </div>
  );
};

export default Coach;
