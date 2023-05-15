import AdminRegister from '../components/AdminRegister';
import NavBar from '../components/NavBar';
import UsersTable from '../components/UsersTable';

function Admin() {
  return (
    <>
      <NavBar />
      <h1>Cadastrar Usuário</h1>
      <AdminRegister />
      <UsersTable />
    </>
  );
}

export default Admin;
