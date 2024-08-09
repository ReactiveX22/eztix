import React, { createContext, useContext, useEffect, useState } from 'react';
import TicketService from '../services/ticketService';
import { useCoachContext } from '../contexts/CoachContext';

const TicketContext = createContext();

export const TicketProvider = ({ children }) => {
  const { selectedCoach, loadBookedSeats } = useCoachContext();
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const [newTickets, setNewTickets] = useState([]);

  const createTicketObjects = () => {
    if (selectedCoach && selectedSeats.size > 0) {
      const ticketsData = Array.from(selectedSeats).map((seat) => ({
        seat_number: seat,
        coach_id: selectedCoach,
        customer_id: sessionStorage.getItem('customerId'),
      }));

      return ticketsData;
    }
    return [];
  };

  const createTickets = async () => {
    const ticketsData = createTicketObjects();
    if (ticketsData.length === 0) return;

    try {
      const createdTicketIdsPromises = ticketsData.map((ticketData) =>
        TicketService.createTicket(ticketData)
      );

      const createdTicketIds = await Promise.all(createdTicketIdsPromises);

      setNewTickets([]);
      loadBookedSeats();
      setSelectedSeats(new Set());
      return createdTicketIds;
    } catch (error) {
      console.error('Error creating tickets:', error.message);
    }
  };

  return (
    <TicketContext.Provider
      value={{
        selectedSeats,
        setSelectedSeats,
        createTicketObjects,
        createTickets,
      }}
    >
      {children}
    </TicketContext.Provider>
  );
};

export const useTicketContext = () => useContext(TicketContext);
