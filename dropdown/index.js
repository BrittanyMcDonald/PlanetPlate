import React from 'react';
import './dropdown.css';


const Dropdown = ({}) => <div>
<dropdown role="dropdown">
<div class="custom-select" style="width:200px;">
  <select>
    <option value="0">Select Meal Type:</option>
    <option value="1">Vegan</option>
    <option value="2">Gluten Free</option>
    <option value="3">Vegetarian</option>
    <option value="4">Regular</option>

  </select>
</div>
  </dropdown>
</div>

NavBar.defaultProps = {
}

export default Dropdown;
