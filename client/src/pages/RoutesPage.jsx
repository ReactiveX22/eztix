import React from 'react';
import ArrowSubmitBtn from '../components/ArrowSubmitBtn';
import Coach from '../components/Coach';
import CoachList from '../components/CoachList';
import DatePicker from '../components/DatePicker';
import RouteList from '../components/RouteList';
import { CoachProvider } from '../contexts/CoachContext';
import { DateProvider } from '../contexts/DateContext';
import { RouteProvider } from '../contexts/RouteContext';
import { TicketProvider } from '../contexts/TicketContext';

const RoutesPage = () => {
  return (
    <RouteProvider>
      <DateProvider>
        <CoachProvider>
          <TicketProvider>
            <div className='flex w-full justify-center gap-10'>
              <div className='flex flex-col gap-8'>
                <RouteList />
                <DatePicker monthsToShow={2} />
              </div>
              <div className='h-auto w-[1px] bg-zinc-800'></div>
              <div>
                <CoachList />
              </div>
              <div className='h-auto w-[1px] bg-zinc-800'></div>
              <div>
                <Coach />
              </div>
              <div className=''>
                <ArrowSubmitBtn />
              </div>
            </div>
          </TicketProvider>
        </CoachProvider>
      </DateProvider>
    </RouteProvider>
  );
};

export default RoutesPage;
