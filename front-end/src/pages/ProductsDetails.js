import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import formatDate from '../utils/formatDate';
import { getProducts } from '../utils/getData';

function ProductsDetails() {
  const [saleDetail, setSaleDetail] = useState({});
  const cd = 'customer_order_details';

  const { id } = useParams();

  useEffect(() => {
    getProducts('GET', `/customer/orders/${id}`).then((data) => {
      setSaleDetail(data);
    });
  }, [id]);

  return (
    <>
      <NavBar />
      <h1>Detalhe do Pedido</h1>
      <div>
        <p
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          PEDIDO
          {' '}
          000
          {saleDetail.id}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          P.Vend:
          {' '}
          {saleDetail?.seller?.name}
        </p>
        <p
          data-testid="customer_order_details__element-order-details-label-order-date"
        >
          {formatDate(saleDetail.saleDate)}
        </p>
        <p
          data-testid={ `${cd}__element-order-details-label-delivery-status` }
        >
          {saleDetail.status}
        </p>
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          disabled
        >
          Marcar Como Entregue
        </button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidades</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
          </tr>
        </thead>
        <tbody>
          {saleDetail?.products?.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-name
              -${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-quantity
                -${index}` }
              >
                {product.SaleProduct.quantity}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-unit-price
                -${index}` }
              >
                {product.price.replace('.', ',')}
              </td>
              <td
                data-testid={ `customer_order_details__element-order-table-sub-total
                -${index}` }
              >
                {(product.price * product.SaleProduct.quantity)
                  .toFixed(2).replace('.', ',') }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p data-testid="customer_order_details__element-order-total-price">
        Total:
        {' '}
        R$
        {saleDetail?.totalPrice?.replace('.', ',')}

      </p>
    </>
  );
}

export default ProductsDetails;
