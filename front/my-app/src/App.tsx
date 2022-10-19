import HomePage from "./HomePage/HomePage";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Favorites from "./FlowerCards/Favorites";
import FlowerProfile from "./FlowerCards/FlowerProfile";
import SightingsList from "./Sightings/SightingsList";
import AddSighting from "./Sightings/AddSighting";
import SightingDetailsComp from "./Sightings/SightingDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/favorites">
          {" "}
          <Favorites />{" "}
        </Route>
        <Route path="/add/:id">
          {" "}
          <AddSighting />{" "}
        </Route>
        <Route path="/sightings">
          {" "}
          <SightingsList />{" "}
        </Route>
        <Route path="/sighting/:id">
          {" "}
          <SightingDetailsComp />{" "}
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
