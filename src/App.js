import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage.js';
import LoginPage from './components/pages/LoginPage.js';


const App = () => (
  <div>
    <Route exact path="/" exact component={HomePage} />
    <Route path="/login" component={LoginPage} />
  </div>
);

export default App;
