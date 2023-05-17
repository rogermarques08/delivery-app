import { useContext, useEffect, useState } from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import DeliveryContext from '../context/DeliveryContext';

function OrdersTable() {
  const { quantities, products, setTotal } = useContext(DeliveryContext);
  const [productsOnCart, setProductsOnCart] = useState([]);

  useEffect(() => {
    const cart = products
      .filter((item) => Object.keys(quantities).includes(item.id.toString()));

    setProductsOnCart(cart);
  }, [setProductsOnCart, products, quantities]);

  const removeItem = (id) => {
    const newCart = productsOnCart.filter((product) => product.id !== id);

    const newTotal = newCart.reduce((acc, curr) => {
      const quantity = quantities[curr.id] || 0;
      return acc + (curr.price * quantity);
    }, 0);

    setTotal(newTotal);
    setProductsOnCart(newCart);
  };

  return (
    <table className="checkout-table">
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
          <tr key={ product.id } className="item-table">
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
              {`R$${product.price.replace('.', ',')}`}
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
            >
              {`R$${(product.price * quantities[product.id])
                .toFixed(2).replace('.', ',')}` }
            </td>
            <td
              data-testid={ `customer_checkout__element-order-table-remove-${index}` }
            >
              <button
                type="button"
                className="remove-item-table-btn"
                onClick={ () => removeItem(product.id) }
              >
                <BsFillTrash3Fill />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default OrdersTable;
