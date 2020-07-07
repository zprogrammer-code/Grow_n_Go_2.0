import React, { Component } from 'react';
import './style.css'
import { Link } from 'react-router-dom'

export default class Menu extends Component{

  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
  
  return (
    <>
    <div id="flyoutMenu"
    onClick={this.props.handleMouseDown} 
    className={visibility}>
      <Link to="/home">
        <span role="img" aria-label="about us">&#x1f3cb;&#xfe0f;&#x200d;&#x2642;&#xfe0f;</span>
        Home
      </Link>

      <Link to="/goals">
        <span role="img" aria-label="price">&#x1f945;</span>
        Goals
        </Link>

      <Link to="/routines">
        <span role="img" aria-label="contact">&#x231a;</span>
        routines
        </Link>

      <Link to="/contact">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </Link>
  </div>
  </>
  )
}
}

