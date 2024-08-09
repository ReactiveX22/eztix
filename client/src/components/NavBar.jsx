import { IconTicket } from '@tabler/icons-react';
import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useCustomerContext } from '../contexts/CustomerContext';
import LogoutBtn from './LogoutBtn';

const NavBar = () => {
  const { phoneNumber, setPhoneNumber } = useCustomerContext();

  useEffect(() => {
    const pN = sessionStorage.getItem('phoneNumber');

    setPhoneNumber(pN);
  });

  return (
    <nav className='mx-auto flex w-[65%] justify-between border-b border-zinc-800 p-2'>
      <div className='text-2xl'>
        <NavLink
          to='/'
          className='inline-flex items-center gap-1 text-2xl leading-none'
        >
          <IconTicket
            size={36}
            stroke={1}
            className='leading-none text-green-600'
          />
          eztix
        </NavLink>
      </div>
      <ul className='flex items-center gap-5 text-sm'>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-neutral' : 'text-neutral-500 hover:text-neutral'
            }
            to='/buy'
          >
            buy tickets
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-neutral' : 'text-neutral-500 hover:text-neutral'
            }
            to='/coach/create'
          >
            create coach
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'text-neutral' : 'text-neutral-500 hover:text-neutral'
            }
            to='/login'
          >
            {phoneNumber || 'login'}
          </NavLink>
        </li>
        {phoneNumber ? (
          <li>
            <LogoutBtn />
          </li>
        ) : (
          ''
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
