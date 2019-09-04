import React from "react";
import 'bootstrap/dist/css/bootstrap';
import './css/App.css';

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import Registro from "./Registro";
import Home from "./Home";

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <div className="row justify-content-end">
            <div className="m-2">
              <Link to = "/" className = "btn btn-primary">
                <i className="fa fa-home iconHome fa-2x" aria-hidden="true"></i>
              </Link>
            </div>
            <div className = "m-2">
                <Link to = "/Registro" className = "btn btn-primary">Registrarse</Link>
            </div>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Registro" component={Registro} />
          </Switch>
        </div>

      </BrowserRouter>



    );
  }
}

export default App;
