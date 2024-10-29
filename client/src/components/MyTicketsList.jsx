import { format } from 'date-fns';
import { CiRoute } from 'react-icons/ci';
import { CiCalendarDate } from 'react-icons/ci';
import TicketPDFDocument from './TicketPDFDocument';
import { useUserTicketsContext } from '../contexts/UserTicketsContext';
import { pdf } from '@react-pdf/renderer';
import { useCustomerContext } from '../contexts/CustomerContext';
import ticketService from '../services/ticketService';

const MyTicketsList = () => {
  const { userTickets, loading } = useUserTicketsContext();
  const { customerId } = useCustomerContext();

  if (loading) {
    return <div>Loading...</div>;
  }

  const formatDateTime = (timestamp) => {
    const date = new Date(timestamp);
    return format(date, 'd MMM, h:mm a');
  };

  const handlePrint = async (customerId, coachId) => {
    try {
      const ticket = await ticketService.downloadTickets(customerId, coachId);

      console.log(ticket);

      const blob = await pdf(<TicketPDFDocument ticket={ticket} />).toBlob();

      const filename =
        `ticket_${ticket.customer_phone}_${ticket.coach_id}.pdf`.replace(
          /\s/g,
          '_'
        );

      const urlObject = window.URL.createObjectURL(blob);

      const a = document.createElement('a');
      a.href = urlObject;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      window.URL.revokeObjectURL(urlObject);
    } catch (error) {
      console.error('Error fetching user tickets:', error.message);
    }
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
              <button onClick={() => handlePrint(customerId, ticketId)}>
                Download ⬇️
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default MyTicketsList;
