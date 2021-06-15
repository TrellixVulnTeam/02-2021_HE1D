import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.mion.css';

import "./App.css"
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
  <Router>
    <Route exact path='/' component={Home}/>
    <Route exact path="login" component={Login}/>
    <Route exact path="register" component={Register}/>
  </Router>
  );
}

export default App;
 