import { IconCircle, IconCircleFilled } from '@tabler/icons-react';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useCoachContext } from '../contexts/CoachContext';
import { useTicketContext } from '../contexts/TicketContext';

const CoachList = () => {
  const {
    coaches,
    selectedCoach,
    setSelectedCoach,
    setBookedSeats,
    loading,
    error,
  } = useCoachContext();

  const { setSelectedSeats } = useTicketContext();

  if (loading) return <p>Loading coaches...</p>;
  if (error) return <p>Error loading coaches.</p>;

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return format(date, 'd MMM, h:mm a');
  };

  const handleCoachClick = (coachId) => {
    setSelectedCoach((prevSelectedCoach) =>
      prevSelectedCoach === coachId ? null : coachId
    );
  };

  useEffect(() => {
    setBookedSeats(new Set());
    setSelectedSeats(new Set());
  }, [selectedCoach]);

  return (
    <div className='flex h-full flex-col gap-3 text-center'>
      <h1 className='px-2 text-base font-bold'>Select A Coach</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className='scrollbar-thin h-full min-w-[15rem] space-y-3 overflow-y-auto px-2 py-1'>
          {coaches.length === 0 ? (
            <p className='text-sm text-neutral-500'>No Coaches Found!</p>
          ) : (
            ''
          )}
          {coaches.map((coach) => {
            const isExpired = new Date(coach.departure_time) < new Date();
            return (
              <li
                key={coach.id}
                onClick={() => !isExpired && handleCoachClick(coach.id)}
                className={`min-w-[15rem] select-none rounded-md border p-4 ${
                  selectedCoach === coach.id && !isExpired
                    ? 'border-neutral'
                    : 'border-zinc-600 text-zinc-600'
                } ${isExpired ? 'cursor-not-allowed line-through opacity-50' : 'cursor-pointer'}`}
              >
                <div className='flex flex-col items-start'>
                  <div className='mb-2 flex w-full items-center justify-between gap-14'>
                    <span className='text-xl'>{coach.price} ৳</span>
                    {selectedCoach === coach.id ? (
                      <IconCircleFilled
                        size={14}
                        stroke={1}
                        className='text-primary'
                      />
                    ) : (
                      <IconCircle size={14} stroke={1} />
                    )}
                  </div>
                  <span className='text-xs font-light'>
                    {formatDateTime(coach.departure_time)}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CoachList;
