import React, { useState } from 'react';
import loginService from '../services/loginService';
import { useNavigate } from 'react-router-dom';
import { useCustomerContext } from '../contexts/CustomerContext';

function LoginForm() {
  const { phoneNumber, setPhoneNumber } = useCustomerContext();
  const [phone, setPhone] = useState('01653987005');
  const [password, setPassword] = useState('123');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const customer = await loginService.getCustomerByPhone(phone);
      sessionStorage.setItem('phoneNumber', customer.phone);
      sessionStorage.setItem('customerId', customer.id);
      setPhoneNumber(customer.phone);
      console.log(phoneNumber);
    } catch (error) {
      console.error('Login failed', error);
    } finally {
      navigate('/buy');
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form onSubmit={handleSubmit} className='flex flex-col items-center'>
        <div className='mb-6'>
          <label htmlFor='phone' className='mb-2 block text-sm font-medium'>
            Phone
          </label>
          <input
            type='text'
            id='phone'
            className='inputs'
            placeholder='012345679'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='mb-2 block text-sm font-medium'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='inputs'
            placeholder='•••••••••'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type='submit'
          className='w-1/2 rounded-lg bg-primary px-5 py-2.5 text-center text-sm font-medium focus:outline-none'
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
