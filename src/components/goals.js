import React, { Component } from 'react'
import './style.css'

export default class Goals extends Component {

    render(){
    return(
        <div className="Center-Container">
        <div className="Center-Block Absolute-Center"></div>
            <br/>
            <form id="goals">
            <br/>
                <input placeholder = "what would you like accomplish?" size="80"/>
                <br/>
                <input placeholder = "In what time period would you like to accomplish this?" size="80"/> 
                <br/>
                <input placeholder = " How many lbs (increase or decrease) would you like to loose?" size="80"  />
                <br/>
                <input type="submit" />
            </form>
   
        </div>
    )
}
}