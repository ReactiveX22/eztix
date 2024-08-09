import React from 'react';
import LoginForm from '../components/LoginForm';
import { CustomerProvider } from '../contexts/CustomerContext';

const LoginPage = () => {
  return (
    <div>
      <CustomerProvider>
        <LoginForm />
      </CustomerProvider>
    </div>
  );
};

export default LoginPage;
