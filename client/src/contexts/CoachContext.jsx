import React, { createContext, useState, useEffect, useContext } from 'react';
import coachService from '../services/coachService';
import ticketService from '../services/ticketService';
import { useRouteContext } from './RouteContext';
import { useDateContext } from './DateContext';

const CoachContext = createContext();

export const CoachProvider = ({ children }) => {
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [bookedSeats, setBookedSeats] = useState(new Set());
  const { selectedRoute } = useRouteContext();
  const { selectedDate, selectedMonth, selectedYear } = useDateContext();

  useEffect(() => {
    const loadCoaches = async () => {
      if (!selectedRoute) return;

      const isDateSelected =
        selectedDate != null && selectedMonth != null && selectedYear != null;

      setLoading(true);
      try {
        const data = await coachService.fetchCoachesByRoute(selectedRoute);

        let filteredCoaches;

        if (isDateSelected) {
          setSelectedCoach(null);
          filteredCoaches = data.filter((coach) => {
            const coachDate = new Date(coach.departure_time);
            const filterDate = new Date(selectedDate);

            const coachDateString = coachDate.toDateString();
            const filterDateString = filterDate.toDateString();

            return coachDateString === filterDateString;
          });
        } else {
          filteredCoaches = data;
        }

        setCoaches(filteredCoaches);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadCoaches();
  }, [selectedRoute, selectedDate, selectedMonth, selectedYear]);

  const loadBookedSeats = async () => {
    if (!selectedCoach) return;

    try {
      const response =
        await ticketService.fetchSeatNumbersByCoach(selectedCoach);
      const seatNumbers = response[0]?.seat_numbers || [];
      setBookedSeats(new Set(seatNumbers));
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    loadBookedSeats();
  }, [selectedCoach]);

  const value = {
    coaches,
    selectedCoach,
    setSelectedCoach,
    setBookedSeats,
    loading,
    error,
    bookedSeats,
    loadBookedSeats,
  };

  return (
    <CoachContext.Provider value={value}>{children}</CoachContext.Provider>
  );
};

export const useCoachContext = () => useContext(CoachContext);
