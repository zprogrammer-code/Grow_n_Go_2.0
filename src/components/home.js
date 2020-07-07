import React, { Component } from 'react';
import Header from './header';
import Main from './main';
 

import { Link } from 'react-router-dom';


export default class Home extends Component {

  render(){
  return (
    <>
        <div>
          <Header>
            <Link to='/signup'>Login</Link>
          </Header>
          <Main  />
        </div>
        </>
  );
  }
}