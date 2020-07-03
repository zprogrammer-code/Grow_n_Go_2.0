import React, { Component } from 'react'
import './style.css'

export default class Burger extends Component{

  render(){
  return (
   
  <div id="burger"  onMouseDown={this.props.handleMouseDown}>
      <div />
      <div />
      <div />
    </div>
  )
  }
}

