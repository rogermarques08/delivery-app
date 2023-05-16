import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/LoginStyle.css';
import getData from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';
import setLogin from '../utils/loginLocalStorage';

function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const [showError, setShowError] = useState(false);

  const history = useHistory();

  const handleChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const maxLength = 6;

    const isEmailValid = emailRegex.test(form.email);
    const isPasswordValid = form.password.length >= maxLength;

    return isEmailValid && isPasswordValid;
  };

  const login = async () => {
    const data = await getData('POST', form, '/login');

    if (data.message) return setShowError(true);

    setLogin(data);

    if (data.role === 'seller') return history.push('seller/orders');
    if (data.role === 'administrator') return history.push('admin/manage');
    history.push('customer/products');
  };

  useEffect(() => {
    const user = getLocalStorage('user');

    if (user) { history.push('customer/products'); }
  }, [history]);

  return (
    <div className="login-container">
      <h1>logo</h1>
      <h1>Teste Delivery</h1>
      <form className="login-input">
        <label htmlFor="common_login__input-email">
          <input
            type="text"
            name="email"
            data-testid="common_login__input-email"
            onChange={ handleChange }
            placeholder="Email"
            className="inputs-login"
          />
        </label>
        <label htmlFor="common_login__input-password">
          <input
            type="text"
            name="password"
            onChange={ handleChange }
            data-testid="common_login__input-password"
            placeholder="Senha"
            className="inputs-login"
          />
        </label>
        <div className="button-login-container">
          <button
            type="button"
            data-testid="common_login__button-login"
            disabled={ !validateForm() }
            onClick={ login }
            className="button-login"
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            onClick={ () => history.push('register') }
          >
            Ainda não tenho conta
          </button>
        </div>
      </form>
      {showError && (
        <p data-testid="common_login__element-invalid-email">error message</p>
      )}
    </div>
  );
}

export default Login;
