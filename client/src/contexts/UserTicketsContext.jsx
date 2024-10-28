import React, { createContext, useContext, useEffect, useState } from 'react';
import TicketService from '../services/ticketService';
import { useCustomerContext } from './CustomerContext';

const UserTicketsContext = createContext();

export const UserTicketsProvider = ({ children }) => {
  const { customerId } = useCustomerContext();
  const [userTickets, setUserTickets] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUserTickets = async () => {
      if (customerId) {
        setLoading(true);
        try {
          const ticketsData =
            await TicketService.fetchTicketsByCustomer(customerId);
          setUserTickets(ticketsData);
        } catch (error) {
          console.error('Error fetching user tickets:', error.message);
          setUserTickets({});
        } finally {
          setLoading(false);
        }
      } else {
        setUserTickets({});
      }
    };

    fetchUserTickets();
  }, [customerId]);

  return (
    <UserTicketsContext.Provider value={{ userTickets, loading }}>
      {children}
    </UserTicketsContext.Provider>
  );
};

export const useUserTicketsContext = () => useContext(UserTicketsContext);
