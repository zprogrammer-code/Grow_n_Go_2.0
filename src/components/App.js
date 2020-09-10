
import React, { Component } from 'react';
import {   BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import Home from './home';
import SignUp from './signup';
import Login from "./Login";
import Dashboard from './dashboard';
import Workout from './Workout';
import NoMatch from './NoMatch';
import Burger from './Burger';
import Menu from './Menu';
import Routines from './routines';
import Goals from './goals';
import Addform from './addform';
import Authentication from './authentication';
import Main from './main';


export default class App extends Component {

  constructor(props){
    super(props);
   
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN",
      user: {}
      // visible: false
    };

    this.handleLogin = this.handleLogin.bind(this);
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
  }

  // checkLoggedInStatus(){
  //   fetch("http://localhost:3000/users",
  //    {withCredentials: true})
  //    .then(response => response.json())
  //    .then(result => {
  //      if (result.data.logged_in && this.state.loggedInStatus === " NOT_LOGGED_IN ") {
  //      this.setState({
  //        loggedInStatus: " LOGGED_IN ",
  //        user: result.data.user
  //      })
  //    } else if (!result.data.logged_in & this.state.loggedInStatus === " LOGGED_IN ") {
  //    this.setState({
  //      loggedInStatus: " NOT_LOGGED_IN",
  //      user: {}
  //    })
  //   }
  // }
  //    )
  //    .catch(error => {console.log("error biatch")})
  // }

  // componentDidMount() {
  //   this.checkLoggedInStatus( );
  // }

  handleLogin(data) {
    this.setState({
      isLoggedIn: true,
      loggedInStatus: "LOGGED_IN",
      user: data.user
    });
  }

  handleLogout(data) {
    this.setState({
      isLoggedIn: false,
      loggedInStatus: "IS NOT LOGGED_IN",
      user: {}
    })
  }

  handleSuccessfulAuth(data) {
    // TODO update parent component
    this.props.handleLogin(data);
    this.props.history.push("/dashboard");
  }

  // useEffect = () => {
  //   const token = localStorage.getItem("token")
  //   if(token){
  //     fetch("http://localhost:3000/auto_login", {
  //       headers: {
  //         Authorization: `Bearer${token}`
  //       }
  //     })
  //     .then(response => response.json())
  //     .then( data => {
  //       this.useState(data);
  //       console.log(data);
  //     });
  //   }
  // };



  // props, context
  render(){
  return (
   
<div className= "app">
  <BrowserRouter>
    <Switch>
      < Route
      exact
      path={"/"}
      render={props => (
        <Home { ... props} loggedInStatus={this.state.loggedInStatus} /> 
        )}
      />
      < Route
      exact
      path={"/Menu"}
      render={props => (
        <Menu { ... props} loggedInStatus={this.state.loggedInStatus} /> 
        )}
      />
      < Route
       exact 
       path={"/dashboard"}
       render={props => (
        < Dashboard { ... props} loggedInStatus={this.state.loggedInStatus} /> 
        )}
      />
      < Route 
       exact 
       path={"/Workout"}
       render={props => (
        < Workout { ... props} />
          )}
          />
      <Route 
       exact
       path={"/routines"}
       render={props => (
        < Routines { ... props} />
          )}
          />
      <Route 
       exact
       path={"/goals"}
       render={props => (
        < Goals  { ... props} />
          )}
          />
      < Route 
        exact
        path={"/Login"}
        render={props => (
          < Login { ... props} />
            )}
            />
      < Route
        exact
        path={"/signup"}
        render={props => (
          < SignUp { ... props} />
            )}
            />
      < Route
        exact
        path={"/authentication"}
        render={props => (
          < Authentication { ... props} handleLogin={this.handleLogin  } loggedInStatus={this.state.loggedInStatus} />
            )}
            />
      < Route
        exact
        path={"/Burger"}
        render={props => (
          < Burger { ... props} />
            )}
            />
      < Route
        exact
        path={"/Menu"}
        render={props => (
          < Menu { ... props} />
            )}
            />
      < Route
        exact
        path={"/addform"}
        render={props => (
          <Addform { ... props} />
            )}
            />
      < Route
        exact
        path={"/main"}
        render={props => (
        < Main { ... props} />
          )}
          />
      < Route
        exact
        path={"/NoMatch"}
        render={props => (
        < NoMatch { ... props} />
          )}
          />
    </Switch>
    </BrowserRouter>
    </div>
   


  );
  }
}
