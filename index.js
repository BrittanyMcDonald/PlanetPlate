import React from 'react';
import '/Users/aneetromana/PlanetPlate/comps/dropdown/dropdown.css';

const dropdown = ({}) => <div>
  
  <dropdown role="navigation">
   <h1>Dropdown Menu</h1>
   <div class= "dropdown">
    <button class="dropbtn">Select</button>
    <div class="dropdown-content">
    <a href="#Vegan">Vegan</a>
    <a href="#Gluten Free">Gluten Free</a>
    <a href="#Vegetarian">Vegetarian</a>
    </div>
   </div>
  </dropdown>
</div>

export default dropdown;