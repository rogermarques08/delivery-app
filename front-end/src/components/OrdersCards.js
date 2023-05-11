import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';
import { getProducts } from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function OrdersCards() {
  const [orders, setOrders] = useState([]);

  const { id } = getLocalStorage('user');

  useEffect(() => {
    getProducts('GET', `/customer/ordered/${id}`).then((data) => {
      setOrders(data);
    });
  }, [id]);

  return (
    <div>
      {orders?.map((order) => (
        <Link to={ `/customer/orders/${order.id}` } key={ order.id }>
          <div>
            <p data-testid={ `customer_orders__element-order-id-${order.id}` }>
              Pedido: 000
              {order.id}
            </p>
            <p
              data-testid={ `customer_orders__element-delivery-status-${order.id}` }
            >
              {order.status}
            </p>
            <p
              data-testid={ `customer_orders__element-order-date-${order.id}` }
            >
              {formatDate(order.saleDate)}
            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${order.id}` }
            >
              {order.totalPrice.replace('.', ',')}

            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default OrdersCards;
