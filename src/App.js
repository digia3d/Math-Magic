import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Quote" element={<Quote />} />
      </Routes>
    );
  }
}

export default App;
