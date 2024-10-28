import React, { createContext, useState } from 'react';

const DateContext = createContext();

export const DateProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const value = {
    selectedDate,
    setSelectedDate,
  };

  return <DateContext.Provider value={value}>{children}</DateContext.Provider>;
};

export const useDateContext = () => React.useContext(DateContext);
