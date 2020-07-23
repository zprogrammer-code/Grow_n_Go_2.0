import React, { Component } from 'react';
import './style.css'




export default class SignUp extends Component {

      constructor(props){
        super(props);

        this.state = {
        username: "",
        password: "",
        password_confirmation: "",
        registrationErrors: ""

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleChange( event ) {
          this.setState({
            [event.target.name]: event.target.value
          });
      }

      handleSubmit( event ) {
        console.log("form submitted");
        event.preventDefault();
        this.setState({
          [event.target.name]
        });
      }


      
 
   
      render(){
  return (
    <>
    <div id="workOutForm">
    <form>
      <input
        type = "text"
        name = "username"
        placeholder = "username"
        value = {this.state.username}
    />
    </form>
        </div>
        </>
        )
      }
    }
