import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="Calculator" element={<Calculator />} />
      <Route path="Quote" element={<Quote />} />
    </Routes>
  );
}

export default App;
