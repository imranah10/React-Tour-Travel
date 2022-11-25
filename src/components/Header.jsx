import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {

  // const hamburgerMenu=()=>{
  //   var e=document.getElementById('responsiveMenu');
  //   if(e.className==="nav-list"){
  //     e.className+="responsive"
  //   }
  //   else{
  //     e.className="nav-list"
  //   }
  // }

  return (
    <div>
      <header>
        <nav>
          <div className="nav-logo">
            <h1>Traveller</h1>
          </div>
          <div className="nav-list"id="responsiveMenu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Services">Places</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
         {/* <div className="hamburger">
          <div id="bar1" className="bar"></div>
          <div id="bar2"className="bar"></div>
          <div id="bar3" className="bar"></div>
         </div> */}
        
        </nav>
      </header>
    </div>
  );
};
