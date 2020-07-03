import React, { Component }  from 'react';
import './style.css'

class Addform extends Component{
    render(){
return (
   <>
  <div className="Center-Container">
        <div className="Center-Block Absolute-Center">
          <h4 className="Title">Routines</h4>
          <form action="POST" className="Calves_Form">
            <input type="text" name="workout" placeholder="Type Of Workout" id="Calves Form"/>
            <br/><br/>
            <input type="text" name="weight" placeholder="current max weight" id="Calves Form"/>
            <br/><br/>
            <input type="text" name="set" placeholder="e.g. 8-10" id="Calves Form"/>
            <br/><br/>
            <input type="text" name="Reps" placeholder="e.g. 3 reps" id="Calves Form"/>
            <br/><br/>
            <input type="submit" value="Add that"></input>
          </form>
          <br/><br/>
          <p id="p-muscle">
                            Strength Building:  do 3 to 4 sets at your max lifting weight for
                            3-4 repititions. Continue strength Building for 3 to 4 weeks adding
                            weight at a rate your comfortable with.
                               <div/>
                               <br/>
                           Hypertrophy:  This is where you start to lesson the amount of weight 
                           while increasing the amount of reps. you continue to decrease it to
                           about half of your max weight and increase yo reps to 12-64!
                           
          </p>
          </div>
      </div>
    </> 
);
    }
      }

      export default Addform
     