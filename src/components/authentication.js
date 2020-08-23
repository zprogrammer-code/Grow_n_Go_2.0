import React, { Component } from "react";
import Login from "./Login.js";
// import SignUp from "./signup.js";
import "./style.css";

export default class Authentication extends Component {

    constructor(props){
        super(props)
       
        this.state = {
            username: "",
            password: ""
        };

        this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

    }
    
        handleSuccessfulAuth(data) {
            // TODO update parent component
            this.props.handleLogin(data);
            this.props.history.push("/dashbnoard");
          }
    

   

    render(){
        return(
            
                < Login handleSuccessfulAuth={this.handleSuccessfulAuth} />

        )
    }
}