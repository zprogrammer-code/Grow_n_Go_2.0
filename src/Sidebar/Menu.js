import React, { Component } from 'react';
import './menu.css'

export default class Menu extends Component{

  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
  
  return (
    <div id="flyoutMenu"
    onMouseDown={this.props.handleMouseDown} 
    className={visibility}>
      <a href="/">
        <span role="img" aria-label="about us">&#x1f3cb;&#xfe0f;&#x200d;&#x2642;&#xfe0f;</span>
        Home
      </a>
      <a href="/">
        <span role="img" aria-label="price">&#x1f945;</span>
        Goals
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x231a;</span>
        routines
        </a>
      <a href="/">
        <span role="img" aria-label="contact">&#x1f4e9;</span>
        Contact
        </a>
  </div>
  )
}
}

