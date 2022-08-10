import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Calculator from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Calculator" element={<Calculator />} />
          <Route exact path="/Quote" element={<Quote />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
