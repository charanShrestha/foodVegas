// This project was done when only 2/3 of the JS Course was finished.
// So some Refactoring may have been left..

import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'; // router for react
import Home from './Components/Home/Home';
import Hitme from './Components/Hitme';
import Random from './Components/Random';
import './App.css';

class App extends Component {
      
  render() {
    return (
      <BrowserRouter>
          <div className="nav">
            <ul>
              <li className="navbutton">
                <Link to="/">Home</Link>
              </li>
              <li className="navbutton">
                <Link to="/hitme">Hit Me</Link>
              </li>
              <li className="navbutton">
                <Link to="/random">Random</Link>
              </li>
              <hr />
            </ul>

            <Route exact
              path="/"
              render={routeProps => (
                <Home />)}
              />

            <Route
              path="/hitme"
              render={routeProps => (
                <Hitme />)}
              />

            <Route
              path="/random"
              render={() => <Random />}
              />
          </div>
        </BrowserRouter>
      
    );
  }

}

export default App;