import React, {Component} from 'react';
import Addform from './addform';
import './workout.css'

                              


export default class Workout extends Component {

      constructor(props){
            super(props)
            this.state = {
                  name: "",
                  weight: "",
                  sets: "",
                  reps: ""
            }
      }
  componentDidMount = () => {
      fetch("http://localhost:3000/workouts", {
            method:"POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(Workout)
          })}
       
   
      render(){
return(
    <>
   <Addform />
        </>
        );
      }
}