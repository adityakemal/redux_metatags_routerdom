import React, { Component } from 'react';
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Counter from './Counter';
import Navbar from './components/Navbar';
import AllData from './components/AllData';
import Profile from './components/Profile';


class App extends Component {
  render() {
    
    return (
      <Router>
      <div className='App'>
            <Navbar/>
          <Switch>
            <Route exact path="/" component={Counter}/>
            <Route exact path="/all" component={AllData}/>
            <Route exact path="/profile" component={Profile}/>
          </Switch>
      </div>

      </Router>
    );
  }
}

export default App;