import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/HomePage/Header/Header";
import Home from "./components/HomePage/Home/Home";
 import Checkout from './components/HomePage/Checkout/Checkout.js'
import Login from "./components/HomePage/Header/Login";
// import Checkout from './components/checkout/Checkout'
function App() {
  return (
    <Router>
      <div className="App">
      <Header />
        <Switch>
          <Route path="/checkout">
           
            <Checkout />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
     
  );
}

export default App;
