import { useState } from 'react';

function Register() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = ({ target: { value, name } }) => {
    setForm({ ...form, [name]: value });
  };

  return (
    <div>
      <h2>Cadastro</h2>
      <form>
        <label htmlFor="common_register__input-name">
          Name
          <input
            type="text"
            name="name"
            data-testid="common_register__input-name"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="common_register__input-email">
          Email
          <input
            type="text"
            name="email"
            data-testid="common_register__input-email"
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="common_register__input-password">
          Senha
          <input
            type="text"
            name="password"
            onChange={ handleChange }
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="button"
          data-testid="common_register__button-register"
        >
          CADASTRO
        </button>
        <p data-testid="common_register__element-invalid_register ">error message</p>
      </form>
    </div>
  );
}

export default Register;
