import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './pages/Login/Navbar';
import Vendor from './pages/Vendor/vendor';

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route path="/vendor" component={Vendor} />
    </Router>
  );
}

export default App;
