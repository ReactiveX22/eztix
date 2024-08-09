import React, { createContext, useContext, useEffect, useState } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const value = {
    phoneNumber,
    setPhoneNumber,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);
