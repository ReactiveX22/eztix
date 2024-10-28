import React, { createContext, useContext, useEffect, useState } from 'react';

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = useState(
    sessionStorage.getItem('phoneNumber') || ''
  );
  const [customerId, setCustomerId] = useState(
    sessionStorage.getItem('customerId') || ''
  );

  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'customerId') {
        setCustomerId(event.newValue || '');
      } else if (event.key === 'phoneNumber') {
        setPhoneNumber(event.newValue || '');
      }
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const logout = () => {
    sessionStorage.removeItem('customerId');
    sessionStorage.removeItem('phoneNumber');
    setCustomerId('');
    setPhoneNumber('');
  };

  const value = {
    phoneNumber,
    setPhoneNumber,
    customerId,
    setCustomerId,
    logout,
  };

  return (
    <CustomerContext.Provider value={value}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => useContext(CustomerContext);
