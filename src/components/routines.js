import React, { Component } from 'react'
import './style.css'


export default class Routines extends Component {

    // constructor() {
    //     super()
    //     state = {
    //         Recent workout: ""  ,
    //         Current workout: ""
    //     }
    // }

    render(){
        return(
            <div id="routines">
                
            <article id="Recent">
            <h3> Your most recent workout</h3>
            <br/>
                <h2>Workout: flys </h2>
                <br/>
                <h2>Weight: 130</h2>
                <br/>
                <h2>Repititions: 8-10</h2>
                <br/>
                <h2>Sets 3</h2>
            </article>
           
            <article id="Current">
            <h3> Your current workout</h3>
                <br/>
            <h2>Workout: Benchpress </h2>
                <br/>
                <h2>Weight: 230</h2>
                <br/>
                <h2>Repititions: 8-10</h2>
                <br/>
                <h2>Sets 3</h2>

            </article>
            </div>
   
        
     
    )
  }
}
         
        
    
