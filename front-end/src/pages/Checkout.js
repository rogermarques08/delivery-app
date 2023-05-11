import { useContext } from 'react';
import DetailsAndOrders from '../components/DetailsAndAddress';
import NavBar from '../components/NavBar';
import OrdersTable from '../components/OrdersTable';
import DeliveryContext from '../context/DeliveryContext';

function Checkout() {
  const { total } = useContext(DeliveryContext);

  return (
    <div>
      <NavBar />
      <h1>Finalizar Pedido</h1>
      <OrdersTable />
      <p data-testid="customer_checkout__element-order-total-price">
        Total:
        {' '}
        {total.toFixed(2).replace('.', ',')}
      </p>
      <h1>Detalhes e Endereço para a entrega</h1>
      <DetailsAndOrders />
    </div>
  );
}

export default Checkout;
