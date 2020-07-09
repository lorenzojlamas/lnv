import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Redirect
        from="/"
        to="/home" />
      <Switch>
        <Route
          path="/home"
          component={Home} />
        <Route
          path="/about"
          component={About} />
        {/* <Route component={PageError} /> */}
      </Switch>
  </BrowserRouter>
  );
}

export default App;
