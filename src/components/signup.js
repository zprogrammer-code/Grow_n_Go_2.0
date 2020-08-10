import React, { Component } from 'react';
import './style.css';
import axios from 'axios';




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
        const {
          username,
          password,
          password_confirmation
        } = this.state;

        console.log("form submitted");
        axios.post("http://localhost:3000/users", {
          user: {
            username: username,
            password: password,
            password_confirmation: password_confirmation
          }
        },
          { withCredentials: true }
        ).then(response => {
          console.log("registration res", response);
        }).catch(error => {
          console.log("registration error", error)
        })

        event.preventDefault();
      }


      
 
   
      render(){
  return (
    <>
    <div className="SignUp">
      <h1>Sign Up</h1>
    <form onSubmit={this.handleSubmit}>
      <input
        type = "username"
        name = "username"
        placeholder = "Username"
        value = {this.state.username}
        onChange = {this.handleChange}
    />
      <input
        type = "text"
        name = "password"
        placeholder = "password"
        value = {this.state.password}
        onChange = {this.handleChange}
    />
    </form>
        </div>
        </>
        )
      }
    }
