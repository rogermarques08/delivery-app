import PropTypes from 'prop-types';
import { useEffect, useMemo, useState } from 'react';
import DeliveryContext from './DeliveryContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
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

    // const teste = products
    //   .filter((item) => Object.keys(quantities).includes(item.id.toString()));
    // console.log(Object.keys(quantities));
    // console.log(teste);
    setTotal(totalCart);
  }, [quantities, products]);

  const value = useMemo(() => ({
    products,
    setProducts,
    quantities,
    handleQuantityChange,
    increment,
    setTotal,
    total,

  }), [
    products,
    setProducts,
    setTotal,
    quantities,
    total,
  ]);

  return (
    <DeliveryContext.Provider value={ value }>
      {children}
    </DeliveryContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
