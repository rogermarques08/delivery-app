import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import formatDate from '../utils/formatDate';
import { getProducts } from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function OrdersCards() {
  const [orders, setOrders] = useState([]);

  const { id, role } = getLocalStorage('user');

  useEffect(() => {
    getProducts('GET', `/${role}/ordered/${id}`).then((data) => {
      setOrders(data);
    });
  }, [id, role]);

  return (
    <div>
      {orders?.map((order) => (
        <Link to={ `/${role}/orders/${order.id}` } key={ order.id }>
          <div>
            <p data-testid={ `${role}_orders__element-order-id-${order.id}` }>
              Pedido: 000
              {order.id}
            </p>
            <p
              data-testid={ `${role}_orders__element-delivery-status-${order.id}` }
            >
              {order.status}
            </p>
            <p
              data-testid={ `${role}_orders__element-order-date-${order.id}` }
            >
              {formatDate(order.saleDate)}
            </p>
            <p
              data-testid={ `${role}_orders__element-card-price-${order.id}` }
            >
              {order.totalPrice.replace('.', ',')}
            </p>
            <p
              data-testid={ `seller_orders__element-card-address-${order.id}` }
            >
              {order.deliveryAddress}
              ,
              {' '}
              {order.deliveryNumber}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default OrdersCards;
