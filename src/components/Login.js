import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import "./style.css";
// import { Auth } from "aws-amplify";

export default class Login extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: ""
  };
  }

componentDidMount = () => {
      this.fetchData();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchData();
    this.setState({
        username: "",
        password: "",
       });
     
}
      
   fetchData = () => {  fetch("http://localhost:3000/login", {
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
    console.log(result)
    const {token} = result
    localStorage.setItem("token", token)

  })
}
  

      change = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    });
    };
    
   
    render(){
  return (
    <div className="Login">
      <form >
        <FormGroup controlId="username" size="lg">
          <FormLabel>Username</FormLabel>
          <FormControl
            autoFocus
            type="text"
            // value= { username }
            onChange={e => this.change(e) }
          />
    
        </FormGroup>
        <FormGroup controlId="password" size="lg">
          <FormLabel>Password</FormLabel>
          <FormControl
            type= "text"
            // value= { password }
            onChange={e => this.change(e) }
          />
        </FormGroup>
        <Button onClick={e => this.handleSubmit(e)}variant="light" block size="lg" type="submit">
          Login
        </Button>
      </form>
    </div>
  );
  }
}
