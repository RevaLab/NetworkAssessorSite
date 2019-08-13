import React from 'react';
import './App.css';

import Header from './components/Header';
import QueryUI from './components/QueryUI';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <QueryUI />
      <Footer />
    </div>
  );
}

export default App;
