import { format } from 'date-fns';
import { CiRoute } from 'react-icons/ci';
import { CiCalendarDate } from 'react-icons/ci';
import { useUserTicketsContext } from '../contexts/UserTicketsContext';

const MyTicketsList = () => {
  const { userTickets, loading } = useUserTicketsContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return format(date, 'd MMM, h:mm a');
  };

  return (
    <ul className='flex min-w-[40%] flex-col gap-4 text-sm'>
      {Object.entries(userTickets).map(([ticketId, ticket]) => {
        const sortedSeats = ticket.seats.sort();
        return (
          <li
            key={ticketId}
            className='h-20 w-full rounded-md border border-zinc-600 p-4'
          >
            <div className='flex items-center justify-between gap-20'>
              <div className='flex gap-8'>
                <div className='flex w-64 flex-col'>
                  <div className='flex flex-grow items-center gap-2'>
                    <CiRoute className='shrink-0 text-base text-zinc-600' />
                    <h1 className='text-base'>
                      {ticket.start_location}{' '}
                      <span className='text-zinc-300'>-</span>{' '}
                      {ticket.end_location}
                    </h1>
                  </div>
                  <div className='flex items-center gap-2'>
                    <CiCalendarDate className='shrink-0 text-base text-zinc-600' />
                    <h2>{formatDateTime(ticket.departure_time)}</h2>
                  </div>
                </div>
                <div className='flex w-28 items-center'>
                  <h2>💺 {sortedSeats.join(', ')}</h2>
                </div>
                <div className='flex w-20 items-center justify-start'>
                  <h2>💵 {ticket.total_price} ৳</h2>
                </div>
              </div>
              <button>Print 🖨️</button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MyTicketsList;
