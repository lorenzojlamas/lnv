import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './custom.scss';
import './App.css';

import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Discord } from './pages/Discord';
import { ExactasJuega } from './pages/ExactasJuega';
import { Xplora } from './pages/Xplora';
import { NocheDeJuegos } from './pages/NocheDeJuegos';
import { PabellonF } from './pages/PabellonF';
import { Tournament } from './pages/Tournament';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Redirect
        from="/"
        to="/home" />
      <Switch>
        <Route
          path="/about"
          component={About} />
        <Route
          path="/discord"
          component={Discord} />
        <Route
          path="/exactasJuega"
          component={ExactasJuega} />
        <Route
          path="/xplora"
          component={Xplora} />
        <Route
          path="/home"
          component={Home} />
        <Route
          path="/about"
          component={About} />
        <Route
          path="/nocheDeJuegos"
          component={NocheDeJuegos} />
        <Route
          path="/pabellonF"
          component={PabellonF} />
        <Route
          path="/tournament"
          component={Tournament} />
        {/* <Route component={PageError} /> */}
      </Switch>
  </BrowserRouter>
  );
}

export default App;
