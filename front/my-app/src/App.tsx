import React from "react";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./FlowerCards/Favorites";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/favorites">
          {" "}
          <Favorites />{" "}
        </Route>
        <Route path="/">
          {" "}
          <HomePage />{" "}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
