import NavBar from '../components/NavBar';
import OrderCard from '../components/OrdersCards';
import '../styles/OrdersStyle.css';

function Orders() {
  return (
    <div className="orders-container">
      <NavBar />
      <h1 className="orders-title">Pedidos</h1>
      <OrderCard />
    </div>
  );
}

export default Orders;
