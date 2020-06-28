
import React  from 'react';
import './header.css'



function Header() {

  return ( <header >
    <div id="header">
  <h1 id="title">Grow n Go</h1>
  <div id="search">  
        <a href="/login"><h3 id="login" > Login</h3></a>
        <form>
         <input type="search" name="q" placeholder="Search query"></input>
         <input type="submit" value="GO"></input>
       </form>
     </div>
</div>
  </header>)
 
}


export default Header;