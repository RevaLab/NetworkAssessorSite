import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//css
import './App.css';

import Header from './components/Header';
import QueryUI from './components/QueryUI';
import Footer from './components/Footer';

import NetworkUI from './components/NetworkUI';

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={QueryUI} />
        <Route path="/network/" component={NetworkUI} />
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter;
