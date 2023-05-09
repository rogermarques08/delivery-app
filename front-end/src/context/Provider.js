import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import DeliveryContext from './DeliveryContext';

function Provider({ children }) {
  const [products, setProducts] = useState([]);

  const value = useMemo(() => ({
    products,
    setProducts,

  }), [
    products,
    setProducts,
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
