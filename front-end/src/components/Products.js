import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';

function Products() {
  const { products } = useContext(DeliveryContext);
  const {
    increment,
    total,
    handleQuantityChange,
    quantities,
  } = useContext(DeliveryContext);

  const history = useHistory();

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
            style={ { width: '100px' } }
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
        onClick={ () => history.push('/customer/checkout') }
        disabled={ total === 0.00 }
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
