import AdminRegister from '../components/AdminRegister';
import NavBar from '../components/NavBar';
import UsersTable from '../components/UsersTable';
import '../styles/AdminStyle.css';
import '../styles/LoginStyle.css';

function Admin() {
  return (
    <div className="admin-container">
      <NavBar />
      <h1 className="admin-title">Cadastrar Usuário</h1>
      <AdminRegister />
      <h1 className="table-user-title">Lista de Usuários</h1>
      <UsersTable />
    </div>
  );
}

export default Admin;
