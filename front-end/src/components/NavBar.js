import { useEffect, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiLogOut } from 'react-icons/fi';
import { IoIosPint } from 'react-icons/io';
import { TbClipboardText } from 'react-icons/tb';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import logo from '../images/logo2.png';
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
      <div className="logo-container">
        <img src={ logo } alt="logo" className="logo" />
        {user.role === 'customer' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-products"
            onClick={ () => history.push('/customer/products') }
            className="nav-item"
          >
            <IoIosPint />
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
            <TbClipboardText />
            {user.role === 'customer' ? ' Meus pedidos' : 'Pedidos' }
          </button>
        )}
      </div>
      <div className="user-container">
        {/* {user.role === 'administrator' && (
          <button
            type="button"
            data-testid="customer_products__element-navbar-link-orders"
            onClick={ () => history.push('/admin/manage') }
            className="nav-item"
          >
            Gerenciar Usuários
          </button>
        )} */}
        <button
          type="button"
          data-testid="customer_products__element-navbar-user-full-name"
          className="nav-item"
        >
          <AiOutlineUser />
          {user.name}
        </button>
        <button
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ logOut }
          className="nav-item"
        >
          <FiLogOut />
          Sair
        </button>

      </div>
    </nav>
  );
}

export default NavBar;
