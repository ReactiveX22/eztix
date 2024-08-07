import React, { createContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const value = {
    selectedDate,
    setSelectedDate,
    selectedMonth,
    setSelectedMonth,
    selectedYear,
    setSelectedYear,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export const useDateContext = () => React.useContext(DateContext);
