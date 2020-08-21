import React, { Component } from "react";
// import { Button } from "react-bootstrap";
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
      [event.target.name]: event.target.value
    });
  }
y
  handleSubmit(event) {
    console.log("form submitted");
    this.getUserData(event);
    this.setState({
      username: "",
      password: ""  
    });
  }
    getUserData(event) {
      event.preventDefault()
      fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
          username: 'username',
          password: 'password'
        
      }),
       withCredentials: true })
      .then(response => response.json())
      .then(result => {
        const {token} = result
        localStorage.setItem("token", token)
        console.log("success", result)
     
      }).catch(error => console.error(error.message))
      
    }
  

    


render(){

  return (
    <div className="Login-container" >
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
				            <div className="d-flex justify-content-end social_icon">
					              <span><i className="fab fa-facebook-square"></i></span>
					              <span><i className="fab fa-google-plus-square"></i></span>
					              <span><i className="fab fa-twitter-square"></i></span>
				            </div>
			          </div>
                <div className="card-body">
                    <form>
                        {/* <label any="username">Username:</label> */}
                        <div className="input-group form-group">
					                  <div className="input-group-prepend">
							                  <span className="input-group-text"><i class="fas fa-user"></i></span>
						                </div>
                                <input
                                  type="text"
                                  name="username"
                                  placeholder="Username"
                                  className="form-control"
                                  value= {this.state.name}
                                  onChange= {this.handleChange}
                                  size="50"
                                />
                            </div>
                        <div className="input-group form-group">
						                <div class="input-group-prepend">
							                  <span class="input-group-text"><i class="fas fa-user"></i></span>
						                </div>
                                <input
                                 type= "password"
                                 className="form control"
                                 placeholder="Password"
                                 value= {this.state.name}
                                 onChange= {this.handleChange}
                                  />
                            </div>
                        <div className="row align-items-center remember">
                          <label> Remember Me</label>
						                    <input type="checkbox"/>
					             </div>
                <div class="form-group">
						      <input onClick={e => this.handleSubmit(e)}variant="light" block size="lg" type="submit" value="Login" className="btn float-right login_btn"/>
              </div>
          </form>
      </div>
      <div class="card-footer">
				<div class="d-flex justify-content-center links">
					Don't have an account?<a href="#">Sign Up</a>
				</div>
				<div class="d-flex justify-content-center">
					<a href="#">Forgot your password?</a>
				</div>
			</div>
        </div>
        </div>
    </div>
  );
  }
}
