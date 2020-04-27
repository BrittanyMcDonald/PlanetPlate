import React from 'react';

import './NavBar.css';

const Header = require('./logo.png');

const NavBar = ({Recipe Gallery, Find a Recipe}) => <div // I don't think you can use spaces in the const, that's why they're underlined in red
className="recipe_container"
>

NavBar.defaultProps = {
    fontSize:16,{
        <nav class="navbar navbar-light light-blue lighten-4">


        <a class="navbar-brand" href="#">Planet Plate Logo</a>
        
        
        <button class="navbar-toggler toggler-example" type="button" data-toggle="collapse" data-target="#navbarSupportedContent1"
          aria-controls="navbarSupportedContent1" aria-expanded="false" aria-label="Toggle navigation"><span class="dark-blue-text"><i
              class="fas fa-bars -1x"></i></span></button>
        
        
        <div class="collapse navbar-collapse" id="navbarSupportedContent1">
        
        
          <ul class="navbar-nav auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Find a Recipe<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Recipe Gallery</a>
            </li>
          </ul>
        
        
        </div>
        
        
        </nav>
           
}