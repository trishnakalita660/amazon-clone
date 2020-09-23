import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from './components/Header';
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/checkout">
           <h1> Checkout </h1>
          </Route>
          <Route path="/login">
           <h1> Login </h1>
          </Route>
          <Route path="/">
          <Header/>
           <h1>Home</h1>
           
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
