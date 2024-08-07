import { IconArrowBigRightLine } from '@tabler/icons-react';
import { useTicketContext } from '../contexts/TicketContext';

const ArrowSubmitBtn = () => {
  const { createTickets } = useTicketContext();

  const handleClick = async () => {
    try {
      await createTickets();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div onClick={handleClick} className='flex h-full flex-col justify-center'>
      <div className='flex cursor-pointer flex-col items-end justify-center gap-2 rounded-md border border-neutral-500 p-3 opacity-50 transition-all hover:opacity-100'>
        {/* <span className='flex'>confirm</span> */}
        <IconArrowBigRightLine size={32} stroke={1} />
      </div>
    </div>
  );
};

export default ArrowSubmitBtn;
