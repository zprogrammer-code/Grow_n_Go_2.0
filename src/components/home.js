import React, { Component } from 'react';
import Burger from './Burger';
import Menu from './Menu';
import Header from './header';
import Main from './main';
 

import { Link } from 'react-router-dom';


export default class Home extends Component {

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
    e.stopPropagation();
  }
  
  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }
  render(){
  return (
    <>
        <div>
          <Header>
            <Link to='/signup'>Login</Link>
          </Header>
        <Burger handleMouseDown={this.handleMouseDown}/>
        <Menu  handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible}/>
          <Main  />
        </div>
        </>
  );
  }
}