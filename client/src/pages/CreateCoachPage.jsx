import CoachForm from '../components/CoachForm';
import RouteList from '../components/RouteList';
import { CoachProvider } from '../contexts/CoachContext';
import { DateProvider } from '../contexts/DateContext';
import { RouteProvider } from '../contexts/RouteContext';
import { TicketProvider } from '../contexts/TicketContext';

const CreateCoachPage = () => {
  return (
    <RouteProvider>
      <DateProvider>
        <CoachProvider>
          <TicketProvider>
            <div className='mx-auto flex w-[46rem] justify-start gap-10 pl-10'>
              <div className='flex flex-col gap-8'>
                <RouteList />
              </div>
              <div className='h-auto w-[1px] bg-zinc-800'></div>
              <div>
                <CoachForm />
              </div>
            </div>
          </TicketProvider>
        </CoachProvider>
      </DateProvider>
    </RouteProvider>
  );
};
export default CreateCoachPage;
