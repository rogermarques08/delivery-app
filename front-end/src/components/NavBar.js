import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import '../styles/NavBar.css';
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
          className="nav-item"
        >
          Produtos
        </button>
      )}
      {user.role !== 'administrator' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push(`/${user.role}/orders`) }
          className="nav-item"
        >
          {user.role === 'customer' ? ' Meus pedidos' : 'Pedidos' }
        </button>
      )}
      {user.role === 'administrator' && (
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-orders"
          onClick={ () => history.push('/admin/manage') }
          className="nav-item"
        >
          Gerenciar Usuários
        </button>
      )}
      <button
        type="button"
        data-testid="customer_products__element-navbar-user-full-name"
        className="nav-item"
      >
        {user.name}
      </button>
      <button
        type="button"
        data-testid="customer_products__element-navbar-link-logout"
        onClick={ logOut }
        className="nav-item"
      >
        LogOut
      </button>
    </nav>
  );
}

export default NavBar;
