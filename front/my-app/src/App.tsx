import React from "react";
import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./FlowerCards/Favorites";
import FlowerProfile from "./FlowerCards/FlowerProfile";
import SightingsList from "./Sightings/SightingsList";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/favorites">
          {" "}
          <Favorites />{" "}
        </Route>
        <Route path="/sightings">
          {" "}
          <SightingsList />{" "}
        </Route>
        <Route path="/flower/:id">
          {" "}
          <FlowerProfile />{" "}
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
