import { useCustomerContext } from '../contexts/CustomerContext';

const LogoutBtn = () => {
  const { phoneNumber, setPhoneNumber } = useCustomerContext();

  function handleClick() {
    sessionStorage.setItem('phoneNumber', '');
    sessionStorage.setItem('customerId', '');
    setPhoneNumber('');
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
export default LogoutBtn;
