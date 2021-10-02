import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Number from "./components/Number";
import Hello from "./components/Hello";
import Colors from "./components/Colors";

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/4">Number</Link>
            </li>
            <li>
              <Link to="/hello">Word</Link>
            </li>
            <li>
              <Link to="/hola/blue/red">Colors</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/4">
            <Number />
          </Route>
          <Route path="/Hello">
            <Hello />
          </Route>
          <Route path="/hola/blue/red">
            <Colors />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
