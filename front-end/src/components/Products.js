import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import '../styles/ProductsStyle.css';

function Products() {
  const { products } = useContext(DeliveryContext);
  const {
    increment,
    total,
    handleQuantityChange,
    quantities,
  } = useContext(DeliveryContext);

  const history = useHistory();
  const maxLenthProducts = 11;

  return (
    <div className="products-container">
      {products?.slice(1, maxLenthProducts).map((product) => (
        <div key={ product.id } className="products-card">
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
            className="price"
          >
            {`R$ ${product.price.replace('.', ',')}`}
          </p>
          <div className="quantities-container">
            <button
              type="button"
              data-testid={ `customer_products__button-card-rm-item-${product.id}` }
              onClick={ () => increment(product.id, '-') }
              className="increment"
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
              className="increment"
            >
              +
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ total === 0.00 }
        className="cart-button"
      >
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {`Carrinho R$${total.toFixed(2).replace('.', ',')}`}
        </span>
      </button>
    </div>
  );
}

export default Products;
