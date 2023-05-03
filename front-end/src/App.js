import React, { useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

function App() {
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') { history.push('login'); }
  });

  return (
    <Switch>
      <Route path="/login" component={ Login } />
    </Switch>
  );
}

export default App;
