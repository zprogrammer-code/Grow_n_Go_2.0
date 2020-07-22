import React, { Component } from "react";
import { Button } from "react-bootstrap";
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

componentDidMount() {
      this.fetchData();
  }

  handleSubmit(event) {
    event.preventDefault();
    this.fetchData();
    this.setState({
        username: "",
        password: ""  
       });
 
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


componentDidMount() {
  this.addUser();
}


handleSignup(event) {
  event.preventDefault();
  this.addUser();
  this.setState({
      username: "",
      password: ""  
     });

    }
    
addUser() {  fetch("http://localhost:3000/users", {
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
  })
}

render(){

  return (
    <div className="Login" >
   
       <form>
          <input
            autoFocus
            type="text"
            placeholder="username"
          />
    </form>
    <form>
          <input
            type= "text"
            placeholder="password"
          />
     </form>
        <Button onClick={e => this.handleSubmit(e)}variant="light" block size="lg" type="submit">
          Login
        </Button>
     
    </div>
  );
  }
}
