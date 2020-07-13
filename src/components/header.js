
import React  from 'react';
import './style.css'
import { Link } from 'react-router-dom'



function Header() {

  return ( <header >
    <div id="header">
  <h1 id="title">Grow n Go</h1>
  <div id="search">  
        <Link to="/signup"><h3 id="login" > Login</h3></Link>
        <Link to="/home"><h3 id="logout" > Logout</h3></Link>
        <form>
         <input type="search" name="q" placeholder="Search query"></input>
         <input type="submit" value="GO"></input>
       </form>
     </div>
</div>
  </header>)
 
}


export default Header;