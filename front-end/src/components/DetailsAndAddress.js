function DetailsAndOrders() {
  return (
    <form>
      <label htmlFor="sellers">
        P. Vendedora Responśavel
        <select name="seller" id="sellers" data-testid="customer_checkout__select-seller">
          <option value="2">Fulana Pereira</option>
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          type="text"
          name="address"
          id="address"
          placeholder="Geraldo Campos Pereira, Alta Vista"
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          type="number"
          id="number"
          placeholder="193"
          data-testid="customer_checkout__input-address-number"
        />
      </label>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido

      </button>
    </form>
  );
}

export default DetailsAndOrders;
