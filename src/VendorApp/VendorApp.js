import React from 'react';
import './VendorApp.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './pages/Nav/Navbar';
import Vendor from './pages/Vendor/vendor';
import VendorPolicy from './pages/Policy/VendorPolicy';
import Home from './pages/Home/Home';
import DueDiligenceForm from '../Components/Forms/DueDiligenceForm';

function VendorApp() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <Route exact path="/" render={(props) => <Home {...props} />} />
      <Route
        exact
        path="/vmpolicy"
        render={(props) => <VendorPolicy {...props} />}
      />
      <Route exact path="/vendor" render={(props) => <Vendor {...props} />} />
      <Route
        exact
        path="/dd"
        render={(props) => <DueDiligenceForm {...props} />}
      />
    </Router>
  );
}

export default VendorApp;
