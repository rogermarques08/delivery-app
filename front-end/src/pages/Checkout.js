import { useContext } from 'react';
import DetailsAndOrders from '../components/DetailsAndAddress';
import NavBar from '../components/NavBar';
import OrdersTable from '../components/OrdersTable';
import DeliveryContext from '../context/DeliveryContext';
import '../styles/CheckoutStyle.css';

function Checkout() {
  const { total } = useContext(DeliveryContext);

  return (
    <div className="checkout-container">
      <NavBar />
      <div className="checkout">
        <h1 className="checkout-title">Finalizar Pedido</h1>
        <OrdersTable />
        {/* <h1>Endereço para a entrega</h1> */}
        <DetailsAndOrders />
        <p
          data-testid="customer_checkout__element-order-total-price"
          className="total-price"
        >
          Total:
          {' '}
          R$
          {total.toFixed(2).replace('.', ',')}
        </p>
      </div>
    </div>
  );
}

export default Checkout;
