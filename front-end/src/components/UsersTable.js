import { useEffect, useState } from 'react';
import { getProducts } from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function UsersTable() {
  const [users, setUsers] = useState([]);
  const { token } = getLocalStorage('user');

  const removeUser = (id) => {
    getProducts('DELETE', `/admin/${id}`, token);

    // const filterUsers = users.filter((user) => user.id !== id);
    // setUsers(filterUsers);
  };

  useEffect(() => {
    getProducts('GET', '/admin', token).then((data) => {
      setUsers(data);
    });
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user, index) => (
          <tr key={ user.id }>
            <td
              data-testid={
                `admin_manage__element-user-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-name-${index}`
              }
            >
              {user.name}
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-email-${index}`
              }
            >
              {user.email}
            </td>
            <td
              data-testid={
                `admin_manage__element-user-table-role-${index}`
              }
            >
              {user.role}
            </td>
            <td>
              <button
                type="button"
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
                onClick={ () => removeUser(user.id) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default UsersTable;
