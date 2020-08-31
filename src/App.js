import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import GamePage from "./pages/GamePage"

import './App.css';

function App() {
  return(
    <div className="app">
      <Header />
      <Switch>
        <Route exact path = "/">
            <h1> Welcome To The Typing Game </h1>
            <h2>You can choose your own challenge</h2>
            <h3> Press "Next" for start </h3>
        </Route>
        <Route  path = "/home">
            <HomePage />
        </Route>
        <Route path = "/game">
            <GamePage />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
