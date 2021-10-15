import React, { Component } from 'react';
import "./App.css";
import { Route } from 'react-router-dom';

import Navbar from './components/navbar';

import Clown from './components/clown';
import Prison from './components/prison';
import Emojiclicker from './components/emojiclicker';
import Crud from './components/crud';

class App extends Component {



  render() {
    return (
      <>
        <Navbar/>

      <Route exact path="/">
        <Emojiclicker />
      </Route>

      <Route path="/crud">
        <Crud/>
      </Route>

      <Route path="/clown">
        <Clown />
      </Route>

      <Route path="/prison">
        <Prison />
      </Route>
      
      </>
    );
  }
}

export default App;