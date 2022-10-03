import React from 'react';
import HomePage from './HomePage/HomePage'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/"> <HomePage/> </Route>
            </Switch>
        </Router>
    );
}

export default App;