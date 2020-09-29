import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Components/Header';
import Country from './Components/Country';
import Statedata from './Components/Statedata';
import World from './Components/World';


export default class App extends Component{
  constructor(){
    super()
  }
  render(){
    return(
      <div className="container-fluid">
        <Router>
          <Header/>
          <Switch>
            <Route exact path="/">
              <Country/>
            </Route>
            <Route path="/country">
              <Country/>
            </Route>

            <Route path="/statedata">
              <Statedata/>
            </Route>
            <Route path="/world">
              <World/>
            </Route>
            


          </Switch>
       
          </Router>
      </div>
    )
  }
}