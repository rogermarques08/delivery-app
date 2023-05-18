import { useState } from 'react';
import getData from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function AdminRegister() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    role: 'seller',
  });
  const [showError, setShowError] = useState(false);

  const { token } = getLocalStorage('user');

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

  const register = async () => {
    const data = await getData('POST', form, '/register', token);

    if (data.message) return setShowError(data.message);
  };

  return (
    <div>
      <form className="admin-form">
        <label htmlFor="admin_manage__input-name">
          <input
            type="text"
            name="name"
            data-testid="admin_manage__input-name"
            onChange={ handleChange }
            placeholder="Nome"
            className="inputs-login"
          />
        </label>
        <label htmlFor="admin_manage__input-email">
          <input
            type="text"
            name="email"
            data-testid="admin_manage__input-email"
            onChange={ handleChange }
            placeholder="Email"
            className="inputs-login"
          />
        </label>
        <label htmlFor="admin_manage__input-password">
          <input
            type="text"
            name="password"
            onChange={ handleChange }
            data-testid="admin_manage__input-password"
            placeholder="Senha"
            className="inputs-login"
          />
        </label>
        <label htmlFor="admin_manage__select-role">
          <select
            name="role"
            data-testid="admin_manage__select-role"
            onChange={ handleChange }
          >
            <option name="role" value="seller">Vendedor</option>
            <option name="role" value="customer">Cliente</option>
            <option name="role" value="administrator">Adm</option>
          </select>
        </label>
        <button
          type="button"
          data-testid="admin_manage__button-register"
          disabled={ !validateForm() }
          onClick={ register }
          className="register-user"
        >
          CADASTRAR
        </button>
        {showError && (
          <p
            data-testid="admin_manage__element-invalid-register"
            className="error-message"
          >
            {showError}
          </p>
        )}
      </form>
    </div>
  );
}

export default AdminRegister;
