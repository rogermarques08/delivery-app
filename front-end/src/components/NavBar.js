import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import getLocalStorage from '../utils/getLocalStorage';

function NavBar() {
  const [userName, setUserName] = useState('');

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('user');

    history.push('/login');
  };

  useEffect(() => {
    const { name } = getLocalStorage('user');
    setUserName(name);
  }, []);

  return (
    <nav>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-products"
        onClick={ () => history.push('/customer/products') }
      >
        Produtos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push('/customer/orders') }
      >
        Meus pedidos
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {userName}
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logOut }
      >
        LogOut
      </button>
    </nav>
  );
}

export default NavBar;
