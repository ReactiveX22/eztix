import React, { useState, useEffect } from 'react';
import { useCoachContext } from '../contexts/CoachContext';
import { useTicketContext } from '../contexts/TicketContext';

const BusSeating = () => {
  const { selectedSeats, setSelectedSeats } = useTicketContext();
  const { bookedSeats } = useCoachContext();

  const seats = Array.from({ length: 40 }, (_, index) => {
    const row = String.fromCharCode(65 + Math.floor(index / 4)); // 65 is ASCII for 'A'
    const seatNumber = (index % 4) + 1;
    return `${row}${seatNumber}`;
  });

  const leftSideSeats = seats.filter((_, index) => index % 4 < 2);
  const rightSideSeats = seats.filter((_, index) => index % 4 >= 2);

  const handleSeatClick = (seat) => {
    setSelectedSeats((prev) => {
      const updatedSeats = new Set(prev);
      if (updatedSeats.has(seat) || bookedSeats.has(seat)) {
        updatedSeats.delete(seat);
      } else {
        updatedSeats.add(seat);
      }
      return updatedSeats;
    });
  };

  return (
    <div className='p-4f flex select-none items-center justify-start gap-10 text-sm'>
      <div className='grid grid-cols-2 gap-3'>
        {leftSideSeats.map((seat) => (
          <div
            key={seat}
            onClick={() => handleSeatClick(seat)}
            className={`flex h-[2rem] w-[2.5rem] items-center justify-center rounded border p-3 ${
              selectedSeats.has(seat)
                ? 'selectedSeat'
                : bookedSeats.has(seat)
                  ? 'bookedSeat'
                  : 'availableSeat'
            }`}
          >
            {seat}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-2 gap-3'>
        {rightSideSeats.map((seat) => (
          <div
            key={seat}
            onClick={() => handleSeatClick(seat)}
            className={`flex h-[2rem] w-[2.5rem] cursor-pointer items-center justify-center rounded border p-3 ${
              selectedSeats.has(seat)
                ? 'bg-secondary'
                : bookedSeats.has(seat)
                  ? 'bookedSeat'
                  : 'cursor-pointer border-zinc-400'
            }`}
          >
            {seat}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusSeating;
