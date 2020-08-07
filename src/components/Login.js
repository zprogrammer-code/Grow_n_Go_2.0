import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./style.css";
// import axios from 'axios'; 
// import { Auth } from "aws-amplify";

export default class Login extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
  };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange( event ) {
    this.setState({
      [event.target.username]: event.target.value
    });
  }

  handleSubmit(event) {
    console.log("form submitted");
    this.fetchData();
    this.setState({
      username: "",
      password: ""  
    });
    event.preventDefault();
 
      }
  
  fetchData() {  fetch("http://localhost:3000/login", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    username: "username", 
    password: "password"
    
  })
  })
  .then(response => response.json())
  .then(result => {
    const {token} = result
    localStorage.setItem("token", token)
   console.log("success")
  //  window.location.reload()
  }).catch(error => console.error(error.message))
}

// handleSubmit( event ) {
//   const {
//     username,
//     password,
//     password_confirmation
//   } = this.state;

//   console.log("form submitted");
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
//     console.log("registration error", error)
//   })

//   event.preventDefault();
// }


render(){

  return (
    <div className="Login" >
   
       <form>
          <input
            autoFocus
            name="username"
            type="text"
            placeholder="username"
            value= {this.state.username}
            onChange= {this.handleChange}
          />

          <input
            autoFocus
            name="password"
            type= "text"
            placeholder="password"
            value={this.state.password}
            onChange= {this.handleChange}
          />
     </form>
        <Button onClick={e => this.handleSubmit(e)}variant="light" block size="lg" type="submit">
          Login
        </Button>
     
    </div>
  );
  }
}
