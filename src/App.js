import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Principal from './Principal';
import About from './About';
import Proyectos from './Mis Proyectos';
import Contacto from './Contactame';
import Mensaje from './mensaje'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useAlert } from 'react-alert';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Principal} />
          <Route exact path="/about" component={About} />
          <Route exact path="/Misproyectos" component={Proyectos} />
          <Route exact path="/contactame" component={Contacto}/>
          <Route exact path="/mensaje" component={Mensaje} />
        </Switch>
      </div>
    </Router>
  );
}
