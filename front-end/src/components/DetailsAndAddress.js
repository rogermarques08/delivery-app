import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import DeliveryContext from '../context/DeliveryContext';
import getData, { getProducts } from '../utils/getData';
import getLocalStorage from '../utils/getLocalStorage';

function DetailsAndOrders() {
  const { total, quantities } = useContext(DeliveryContext);

  const [orderInfos, setOrderInfos] = useState({
    deliveryAddress: '',
    deliveryNumber: '',
    sellerId: '2',
  });
  const [sellers, setSellers] = useState([]);

  const history = useHistory();

  useEffect(() => {
    const { token } = getLocalStorage('user');

    getProducts('GET', '/customer/sellers', token).then((data) => setSellers(data));
  }, []);

  const handleChange = ({ target: { value, name } }) => {
    setOrderInfos((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createSale = () => {
    const { id, token } = getLocalStorage('user');
    const products = Object.entries(quantities).reduce((acc, curr) => {
      const productsArray = [
        ...acc,
        {
          productId: +curr[0],
          quantity: curr[1],
        },
      ];

      return productsArray;
    }, []);

    const newSale = {
      userId: id,
      sellerId: +orderInfos.sellerId,
      totalPrice: +total,
      deliveryAddress: orderInfos.deliveryAddress,
      deliveryNumber: orderInfos.deliveryNumber,
      products,
    };

    getData('POST', newSale, '/customer/checkout', token).then((data) => {
      history.push(`/customer/orders/${data.id}`);
    });
  };

  return (
    <form className="address-form">
      <label htmlFor="sellers">
        <p className="label">P. Vendedora Responśavel</p>
        <select
          name="sellerId"
          id="sellers"
          data-testid="customer_checkout__select-seller"
          onChange={ handleChange }
        >
          {sellers.map((seller) => (
            <option key={ seller.id } value={ seller.id }>{seller.name}</option>
          ))}
        </select>
      </label>
      <div className="addres-inputs">
        <label htmlFor="address">
          <p className="label">Endereço</p>
          <input
            type="text"
            name="deliveryAddress"
            onChange={ handleChange }
            value={ orderInfos.deliveryAddress }
            id="address"
            placeholder="Geraldo Campos Pereira, Alta Vista"
            data-testid="customer_checkout__input-address"
            className="inputs-login"
          />
        </label>
        <label htmlFor="number">
          <p className="label">Número</p>
          <input
            type="number"
            name="deliveryNumber"
            id="number"
            placeholder="193"
            onChange={ handleChange }
            value={ orderInfos.deliveryNumber }
            data-testid="customer_checkout__input-address-number"
            className="inputs-login input-number"
          />
        </label>
      </div>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ createSale }
        className="finish-order"
      >
        Finalizar
      </button>

    </form>
  );
}

export default DetailsAndOrders;
