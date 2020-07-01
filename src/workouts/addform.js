import React, { Component }  from 'react';

class Addform extends Component{
    render(){
return (
    <div>
  <div class="Center-Container">
        <div class="Center-Block Absolute-Center">
          <h4 class="Title">Routines<br /></h4>
          <form action="POST" class="Calves_Form">
            <input type="text" name="workout" placeholder="Type Of Workout" id="Calves Form"></input>
            <br><br><input type="text" name="weight" placeholder="current max weight" id="Calves Form"></input></br></br>
            <br><br><input type="text" name="set" placeholder="e.g. 8-10" id="Calves Form"></input></br></br>
            <br><br><input type="text" name="Reps" placeholder="e.g. 3 reps" id="Calves Form"></input></br></br>
            <br><br><input type="submit" value="Add dat shiat"></input></br></br>
          </form>
          <p id="p-muscle">Strength Building:  reps of 3 to 4 at your max lifting weight at 3 sets per workout <br><br>
                           Competent:  lifting reps of 6-8 or 8-10 or even 10-12 lifting as much as you can for 
                           at those reps. Also 3-4 sets for these workouts </br></br><br><br>
                           Hypertrophy:  This is where you lift about half of your max weight lifting ability for reps of 12-64!
                           and for these are 3-5 sets
             </br></br></p>
          </div>
      </div>
      </div>
);
    }
      }

      export default Addform
     