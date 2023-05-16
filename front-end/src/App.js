import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Orders from './pages/Orders';
import ProductsDetails from './pages/ProductsDetails';
import Register from './pages/Register';

function App() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') { history.push('login'); }
  });

  return (
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ ProductsDetails } />
      <Route path="/seller/orders/:id" component={ ProductsDetails } />
      <Route path="/customer/orders" component={ Orders } />
      <Route path="/seller/orders" component={ Orders } />
      <Route path="/admin/manage" component={ Admin } />
    </Switch>
  );
}

export default App;
