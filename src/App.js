import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom';

// import { Provider } from 'react-redux';

import Home from './components/home';
import Game from './components/game';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/game" component={Game} />
      </div>
    </Router>
  );
}

export default App;
