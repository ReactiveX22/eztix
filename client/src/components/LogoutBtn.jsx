import { useCustomerContext } from '../contexts/CustomerContext';

const LogoutBtn = () => {
  const { logout } = useCustomerContext();

  function handleClick() {
    logout();
  }
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
export default LogoutBtn;
