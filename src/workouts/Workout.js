import React, {Component} from 'react'
// import Burger from './Sidebar/Burger';
// import Menu from './Sidebar/Menu';
// import Header from './components/header';


export default class Workout extends Component {

    // constructor(props, context){
    //     super(props, context);
       
    //     this.state = {
    //       visible: false
    //     };
        
    //     this.handleMouseDown = this.handleMouseDown.bind(this);
    //     this.toggleMenu = this.toggleMenu.bind(this);
    //   }
       
    //   handleMouseDown(e) {
    //     this.toggleMenu();
     
    //     console.log("clicked");
    //     e.stopPropagation();
    //   }
      
    //   toggleMenu() {
    //     this.setState({
    //         visible: !this.state.visible
    //     });
    //   }
      render(){
return(
    <>
      {/* <Header/>
      <Burger handleMouseDown={this.handleMouseDown}/>
      <Menu  handleMouseDown={this.handleMouseDown}
        menuVisibility={this.state.visible}/> */}
        <Workout />
        </>
        );
      }
}