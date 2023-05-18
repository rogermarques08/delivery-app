import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logo from '../images/logo.png';
import '../styles/RegisterStyle.css';
import getData from '../utils/getData';
import setLogin from '../utils/loginLocalStorage';

function Register() {
  const [form, setForm] = useState({
    name: '',
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
    const minPassLength = 6;
    const minNameLength = 12;

    const isEmailValid = emailRegex.test(form.email);
    const isPasswordValid = form.password.length >= minPassLength;
    const isNameValid = form.name.length >= minNameLength;

    return isEmailValid && isPasswordValid && isNameValid;
  };

  const login = async () => {
    const data = await getData('POST', form, '/register');

    if (data.message) return setShowError(true);

    setLogin(data);
    history.push('customer/products');
  };

  return (
    <div className="register-container">
      <img src={ logo } alt="logo" style={ { marginBottom: '50px' } } />
      <form className="register-form">
        {/* <h1>Cadastro</h1> */}
        <label htmlFor="common_register__input-name">
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ handleChange }
            placeholder="Nome"
            className="inputs-login"
          />
        </label>
        <label htmlFor="common_register__input-email">
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
            onChange={ handleChange }
            placeholder="Email"
            className="inputs-login"
          />
        </label>
        <label htmlFor="common_register__input-password">
          <input
            type="password"
            name="password"
            onChange={ handleChange }
            data-testid="common_register__input-password"
            placeholder="Senha"
            className="inputs-login"
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ !validateForm() }
          onClick={ login }
          className="button-register"
        >
          CADASTRAR
        </button>
        {showError && (
          <p data-testid="common_register__element-invalid_register">error message</p>
        )}
      </form>
    </div>
  );
}

export default Register;
