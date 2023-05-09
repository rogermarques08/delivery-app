import { useContext, useEffect, useState } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function Products() {
  const { products } = useContext(DeliveryContext);
  const [quantities, setQuantities] = useState({});
  const [total, setTotal] = useState(0);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: quantity,
    }));
  };

  const increment = (productId, oparation) => {
    if (oparation === '+') {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: (Number(prevQuantities[productId]) || 0) + 1,
      }));
    } else {
      setQuantities((prevQuantities) => {
        const quantity = prevQuantities[productId] || 0;
        if (quantity > 0) {
          return {
            ...prevQuantities,
            [productId]: quantity - 1,
          };
        }

        return prevQuantities;
      });
    }
  };

  useEffect(() => {
    const totalCart = products.reduce((acc, curr) => {
      const quantity = quantities[curr.id] || 0;
      return acc + (curr.price * quantity);
    }, 0);

    setTotal(totalCart);
  }, [quantities, products]);

  return (
    <div>
      {products?.map((product) => (
        <div key={ product.id }>
          <h1
            data-testid={ `customer_products__element-card-title-${product.id}` }
          >
            {product.name}
          </h1>
          <img
            src={ product.urlImage }
            alt={ product.name }
            data-testid={ `customer_products__img-card-bg-image-${product.id}` }
          />
          <p
            data-testid={ `customer_products__element-card-price-${product.id}` }
          >
            {product.price.replace('.', ',')}
          </p>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
            onClick={ () => increment(product.id, '-') }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
            onChange={ (e) => handleQuantityChange(product.id, e.target.value) }
            value={ quantities[product.id] || 0 }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
            onClick={ () => increment(product.id, '+') }
          >
            +
          </button>
        </div>
      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
      >
        Ver Carriho
        {' '}
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {total.toFixed(2).replace('.', ',')}
        </span>
      </button>
    </div>
  );
}

export default Products;
