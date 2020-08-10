import React, { Component } from "react";
import Login from "./Login.js";
import SignUp from "./signup.js";
import "./style.css";

export default class Authentication extends Component {

    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div>
                <Login/>
                <h3> OR </h3>
                <SignUp/>
            </div>
        )
    }
}