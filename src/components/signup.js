import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import './style.css';
// import axios from 'axios';




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

      
      
      handleSubmit(event) {
        
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: "username", 
            password: "password" 
          }),
          withCredentials: true})
          .then(response => response.json())
          .then(result => {
            const {token} = result
            localStorage.setItem("token", token)
          }) 
          .catch(error => console.error(error.message))
          
          console.log("form submitted", ) 
          event.preventDefault();
          this.setState({
            username: this.state.name,
            password: this.state.password 
        });
        console.log(this.state)
      }
        //   createUser(){
        //     const {
          //       username,
          //       password,
          //       password_confirmation
          //     } = this.state;
          
          //   axios.post("http://localhost:3000/users", {
            //     user: {
              //       username: username,
              //       password: password,
              //       password_confirmation: password_confirmation
              //     }
              //   },
              //     { withCredentials: true }
              //   ).then(response => {
                //     console.log("registration res", response);
                //   }).catch(error => {
                  //     console.log("registration error", error);
                  //   })
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
        value = {this.state.name}
        onChange = {this.handleChange}
    />
      <input
        type = "text"
        name = "password"
        placeholder = "Password"
        value = {this.state.name}
        onChange = {this.handleChange}
    />
    </form>
        <Button onClick={e => this.handleSubmit(e)}variant="light" block size="lg" type="submit">
          Sign Up
        </Button>
        </div>
        </>
        )
      }
    }
  
