import { useContext } from 'react';
import DeliveryContext from '../context/DeliveryContext';

function Products() {
  const { products } = useContext(DeliveryContext);

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
            {product.price}
          </p>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${product.id}` }
          >
            -
          </button>
          <input
            type="number"
            data-testid={ `customer_products__input-card-quantity-${product.id}` }
          />
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${product.id}` }
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
