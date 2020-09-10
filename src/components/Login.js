import React, { Component } from "react";
import { Link } from 'react-router-dom';
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
      fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
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
        if (result.status === 'created') 
        {
          console.log(result.data.status)
          //  result.data.status
          this.props.history.push("/dashboard");
          // this.props.handleSuccessfulAuth(result.data);
        }
     
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
                        <div className="input-group form-group">
					                  <div className="input-group-prepend">
							                  <span className="input-group-text"><i className="fas fa-user"></i></span>
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
						                <div className="input-group-prepend">
							                  <span className="input-group-text"><i className="fas fa-user"></i></span>
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
                <div className="form-group">
						      <input onClick={e => this.handleSubmit(e)}variant="light" block size="lg" type="submit" value="Login" className="btn float-right login_btn"/>
              </div>
          </form>
      </div>
      <div className="card-footer">
				<div className="d-flex justify-content-center links">
					Don't have an account?  <Link to="/signup"><h3 id="login"> Sign Up </h3></Link>
				</div>
				<div className="d-flex justify-content-center">
        <Link to="/signup"><h3 id="login" > Forgot your password? </h3></Link>
				</div>
			</div>
        </div>
        </div>
    </div>
  );
  }
}
