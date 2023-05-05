import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import getData from '../utils/getData';

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

    history.push('customer/products');
  };

  return (
    <div>
      <h1>LOGO</h1>
      <h2>Nome do APP</h2>
      <form>
        <label htmlFor="common_login__input-email">
          Login
          <input
            type="text"
            name="email"
            data-testid="common_login__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="common_login__input-password">
          Senha
          <input
            type="text"
            name="password"
            onChange={ handleChange }
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_login__button-login"
          disabled={ !validateForm() }
          onClick={ login }
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
      </form>
      {showError && (
        <p data-testid="common_login__element-invalid-email">error message</p>
      )}
    </div>
  );
}

export default Login;
