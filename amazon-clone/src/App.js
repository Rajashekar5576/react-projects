import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Checkout from './components/checkout/Checkout'
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
          <Header/>
            <Checkout/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          {/* This is Default Route */}
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
