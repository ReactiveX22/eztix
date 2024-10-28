import React from 'react';
import MyTicketsList from '../components/MyTicketsList';
import { UserTicketsProvider } from '../contexts/UserTicketsContext';
import { CustomerProvider } from '../contexts/CustomerContext';

function MyTicketsPage() {
  return (
    <div className='flex h-[520px] w-full justify-center gap-10'>
      <CustomerProvider>
        <UserTicketsProvider>
          <MyTicketsList />
        </UserTicketsProvider>
      </CustomerProvider>
    </div>
  );
}

export default MyTicketsPage;
