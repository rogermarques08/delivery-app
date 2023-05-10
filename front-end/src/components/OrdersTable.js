import { useContext, useEffect, useState } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function OrdersTable() {
  const { quantities, products } = useContext(DeliveryContext);
  const [productsOnCart, setProductsOnCart] = useState([]);

  useEffect(() => {
    const cart = products
      .filter((item) => Object.keys(quantities).includes(item.id.toString()));

    setProductsOnCart(cart);
  }, [setProductsOnCart, products, quantities]);

  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidades</th>
          <th>Valor Unitário</th>
          <th>Sub-Total</th>
          <th>Remover Item</th>
        </tr>
      </thead>
      <tbody>
        {productsOnCart.map((product, index) => (
          <tr key={ product.id }>
            <td
              data-testid={
                `customer_checkout__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td data-testid={ `customer_checkout__element-order-table-name-${index}` }>
              {product.name}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
            >
              {quantities[product.id]}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
            >
              {product.price.replace('.', ',')}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {(product.price * quantities[product.id]).toFixed(2).replace('.', ',') }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              <button type="button">
                Remover
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
