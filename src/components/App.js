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
import Routines from './routines';
import Goals from './goals';
import Addform from './addform';
import Authentication from './authentication';
import Main from './main';


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
          <Route path="/routines">
            <Routines />
          </Route>
          <Route path="/goals">
            <Goals />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/authentication">
            <Authentication />
          </Route>
          <Route path="/Burger">
            <Burger />
          </Route>
          <Route path="/Menu">
            <Menu />
          </Route>
          <Route path="/addform">
            <Addform />
          </Route>
          <Route path="/main">
            <Main />
          </Route>
        </Switch>
      </div>
      <div>
        <Route exact path='/' component={Home} />
   
        <Route path='/Workout' component={Workout} />
        <Route path='/routines' component={Routines} />
        <Route path='/goals' component={Goals} />
        <Route path='/Burger' component={Burger} />
        <Route path='/Menu' component={Menu} />
        <Route path='/addform' component={Addform} />

        <Route path='/NoMatch' component={NoMatch} />
      </div>
    </Router>

    </div>


  );
  }
}
