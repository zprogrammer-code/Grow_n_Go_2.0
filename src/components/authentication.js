import React, { Component } from "react";
import Login from "Login.js";
import Signup from "signup.js";
import "style.css";

export default class Authentication extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Login/>
                <Signup/>
            </div>
        )
    }
}