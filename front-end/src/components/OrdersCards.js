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
    <div className="orders-card-container">
      {orders?.map((order) => (
        <Link
          to={ `/${role}/orders/${order.id}` }
          key={ order.id }
        >
          <div className="orders-card">
            <div className="order-details">
              <p
                data-testid={ `${role}_orders__element-order-id-${order.id}` }
                className="order"
              >
                Pedido: 000
                {order.id}
              </p>
              <p
                data-testid={ `${role}_orders__element-delivery-status-${order.id}` }
                className="order-status"
              >
                {order.status}
              </p>
              <p
                data-testid={ `${role}_orders__element-order-date-${order.id}` }
              >
                {formatDate(order.saleDate)}
              </p>
            </div>
            <div className="address-price">
              <p
                data-testid={ `seller_orders__element-card-address-${order.id}` }
              >
                {order.deliveryAddress}
                ,
                {' '}
                {order.deliveryNumber}
              </p>
              <p
                className="order"
                data-testid={ `${role}_orders__element-card-price-${order.id}` }
              >
                {`R$${order.totalPrice.replace('.', ',')}`}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default OrdersCards;
