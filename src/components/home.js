import React, { Component } from 'react';
// import Authentication from 'authentication';
import Header from './header';
import Main from './main';
 

import { Link } from 'react-router-dom';


export default class Home extends Component {
 

 
  // logout(){
  //   localStorage.removeItem("token")
  // } 

  render(){
  return (
    <>
        <div>
          <h1>Home</h1>
          <h1>Status: {this.props.loggedInStatus}</h1>
          <Header>
            <Link to='/authentication'>Login</Link>
            <Link onClick={e => this.logout(e)}to='/home'>Logout</Link>
          </Header>
          <Main  />
        </div>
        </>
  );
  }
}