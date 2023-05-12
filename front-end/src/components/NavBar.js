import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import getLocalStorage from '../utils/getLocalStorage';

function NavBar() {
  const [user, setUser] = useState({ name: '', role: '' });

  const history = useHistory();

  const logOut = () => {
    localStorage.removeItem('user');

    history.push('/login');
  };

  useEffect(() => {
    const { name, role } = getLocalStorage('user');
    setUser({ name, role });
  }, []);

  return (
    <nav>
      {user.role === 'customer' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-products"
          onClick={ () => history.push('/customer/products') }
        >
          Produtos
        </button>
      )}
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-orders"
        onClick={ () => history.push(`/${user.role}/orders`) }
      >
        {user.role === 'customer' ? ' Meus pedidos' : 'Pedidos' }
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user.name}
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
