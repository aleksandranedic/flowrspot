import React from 'react';
import HomePage from './HomePage/HomePage'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage/>} /> 
            </Routes>
        </Router>
    );
}

export default App;