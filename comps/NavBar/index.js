import React from 'react';
import './navbar.css';

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

const NavBar = ({}) => <div>
  <nav role="navigation">
    <div class="iphone">
      <div class="topnav">
        <a href="#home" class="active">Planet Plate Logo</a>
        <a href="myLinks">
        <a href="Tutorial">Tutorial</a>
        <a href="Find a Recipe">Find a Recipe</a>
        <a href="Image Gallery">Image Gallery</a>
        </a>
      <a href="javascript:void(0);" class="icon" onclick="myFunction()"><i class="fa fa-bars"></i></a>


       
      </div>
    </div>

  </nav>
</div>

export default NavBar;