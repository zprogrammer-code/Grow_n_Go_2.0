import React, { Component } from 'react';
import {   BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom';
import Home from './home';
import Login from "./Login";
import Workout from './Workout';
import NoMatch from './NoMatch';
import SignUp from './signup';
import Burger from './Burger';
import Menu from './Menu';

export default class App extends Component {

  constructor(props, context){
    super(props, context);
   
    this.state = {
      visible: false
    };
    
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }
   
  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    // e.stopPropagation();
  }
  
  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }
  render(){
  return (
   
<div>
<Router>
  <Burger handleMouseDown={this.handleMouseDown}/>

  <Menu  handleMouseDown={this.handleMouseDown}
    menuVisibility={this.state.visible}
  />
      <div>
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/Workout">
            <Workout />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </div>
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/Login' component={Login} />
        <Route path='/Workout' component={Workout} />
        <Route path='/NoMatch' component={NoMatch} />
      </div>
    </Router>

    </div>


  );
  }
}
