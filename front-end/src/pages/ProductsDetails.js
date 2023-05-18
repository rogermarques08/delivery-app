import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/ProductsDetailsStyle.css';
import getData, { getProducts } from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function ProductsDetails() {
  const [saleDetail, setSaleDetail] = useState({});
  const [saleStatus, setSaleStatus] = useState('');

  const { role } = getLocalStorage('user');

  const { id } = useParams();

  useEffect(() => {
    getProducts('GET', `/customer/orders/${id}`).then((data) => {
      setSaleDetail(data);
      setSaleStatus(data.status);
    });
  }, [id]);

  const formatDate = (timeStamp) => {
    const date = new Date(timeStamp);
    const sliceNumber = -2;

    const day = (`0${date.getDate()}`).slice(sliceNumber);
    const month = (`0${date.getMonth() + 1}`).slice(sliceNumber);
    const year = date.getFullYear();

    const dataFormatada = `${day}/${month}/${year}`;

    return dataFormatada;
  };

  const handleStatus = (saleId, status) => {
    getData('PUT', { status }, `/customer/status/${saleId}`).then((data) => {
      // console.log(data);
      setSaleStatus(data.status);
    });
  };

  return (
    <div className="details-container">
      <NavBar />
      <h1 className="details-title">Detalhe do Pedido</h1>
      <div className="details">
        <p
          data-testid={ `${role}_order_details__element-order-details-label-order-id` }
        >
          PEDIDO
          {' '}
          000
          {saleDetail.id}
        </p>
        { role === 'customer' && (
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            P.Vend:
            {' '}
            {saleDetail?.seller?.name}
          </p>
        ) }
        <p
          data-testid={ `${role}_order_details__element-order-details-label-order-date"` }
        >
          {formatDate(saleDetail.saleDate)}
        </p>
        <p
          data-testid={
            `${role}_order_details__element-order-details-label-delivery-status`
          }
        >
          {saleStatus}
        </p>
        { role === 'customer' && (
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ saleStatus !== 'Em Trânsito' }
            onClick={ () => handleStatus(id, 'Entregue') }
            className="delivery-btn"
          >
            Marcar Como Entregue
          </button>)}

        { role === 'seller' && (
          <>
            <button
              type="button"
              data-testid="seller_order_details__button-preparing-check"
              disabled={ saleStatus !== 'Pendente' }
              onClick={ () => handleStatus(id, 'Preparando') }
              className="prepare-order-btn"
            >
              PREPARAR PEDIDO
            </button>
            <button
              type="button"
              data-testid="seller_order_details__button-dispatch-check"
              disabled={ saleStatus !== 'Preparando' }
              onClick={ () => handleStatus(id, 'Em Trânsito') }
              className="delivery-btn"
            >
              SAIU PARA ENTREGA
            </button>
          </>
        ) }
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
            <tr key={ product.id } className="item-table">
              <td
                data-testid={
                  `${role}_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `${role}_order_details__element-order-table-name
              -${index}` }
              >
                {product.name}
              </td>
              <td
                data-testid={ `${role}_order_details__element-order-table-quantity
                -${index}` }
              >
                {product.SaleProduct.quantity}
              </td>
              <td
                data-testid={ `${role}_order_details__element-order-table-unit-price
                -${index}` }
              >
                {product.price.replace('.', ',')}
              </td>
              <td
                data-testid={ `${role}_order_details__element-order-table-sub-total
                -${index}` }
              >
                {(product.price * product.SaleProduct.quantity)
                  .toFixed(2).replace('.', ',') }
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p
        data-testid={ `${role}_order_details__element-order-total-price` }
        className="total-price"
      >
        Total:
        {' '}
        R$
        {saleDetail?.totalPrice?.replace('.', ',')}

      </p>
    </div>
  );
}

export default ProductsDetails;
