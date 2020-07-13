import React, { Component } from 'react';
import Header from './header';
import Main from './main';
 

import { Link } from 'react-router-dom';


export default class Home extends Component {

  logout(){
    localStorage.removeItem("token")
  } 

  render(){
  return (
    <>
        <div>
          <Header>
            <Link to='/Login'>Login</Link>
            <Link onClick={e => this.logout(e)}to='/home'>Logout</Link>
          </Header>
          <Main  />
        </div>
        </>
  );
  }
}