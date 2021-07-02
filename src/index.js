import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Pages/home/Home';
import Equipo from './Pages/equipo/Equipo';
import Servicios from './Pages/servicios/Servicios';
import Contacto from './Pages/contacto/Contacto';
import Error404 from './Pages/error404/Error404';
import Perros from './Pages/perros/Perros';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <App />

    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/home">
            <Home />
        </Route>

        <Route path="/equipo">
            <Equipo />
        </Route>

        <Route path="/servicios">
            <Servicios />
        </Route>

        <Route path="/perros">
          <Perros />
        </Route>

        <Route path="/contacto">
            <Contacto />
        </Route>

        <Route exact path="/">
            <Home />
        </Route>

        <Route path="*">
            <Error404 />
        </Route>

      </Switch>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);


