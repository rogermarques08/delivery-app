import { useContext, useEffect } from 'react';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import DeliveryContext from '../context/DeliveryContext';
import { getProducts } from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function CustomerProducts() {
  const { setProducts } = useContext(DeliveryContext);

  useEffect(() => {
    const { token } = getLocalStorage('user');

    getProducts('GET', '/customer/products', token).then((data) => {
      setProducts(data);
    });
  }, [setProducts]);

  return (
    <header>
      <NavBar />
      <Products />
    </header>
  );
}

export default CustomerProducts;
