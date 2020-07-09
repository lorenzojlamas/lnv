import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { About } from './pages/About';
import { NavBar } from './components/NavBar';
import { Home } from './pages/Home';
import { Discord } from './pages/Discord';
import { ExactasJuega } from './pages/ExactasJuega';
import { Explore } from './pages/Explore';
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
      <Redirect
        from="/about"
        to="/about" />
      <Redirect
        from="/discord"
        to="/discord" />
      <Redirect
        from="/exactasJuega"
        to="/exactasJuega" />
      <Redirect
        from="/explore"
        to="/explore" />
      <Redirect
        from="/about"
        to="/about" />
      <Redirect
        from="/home"
        to="/home" />
      <Redirect
        from="/nocheDeJuegos"
        to="/nocheDeJuegos" />
      <Redirect
        from="/pabellonF"
        to="/pabellonF" />
      <Redirect
        from="/tournament"
        to="/tournament" />
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
          path="/explore"
          component={Explore} />
        <Route
          path="/home"
          component={Home} />
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
