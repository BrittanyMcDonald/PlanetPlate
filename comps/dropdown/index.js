import React from 'react';
import './dropdown.css';

var Dropdown_state = true;
function DropdownClick(){
  if (Dropdown_state === true){
    document.querySelector(".dropdown-content").style.opacity = "100%";
    document.querySelector(".dropdown-content").style.display = "flex";
    Dropdown_state = false;
  } else if (Dropdown_state === false){
    document.querySelector(".dropdown-content").style.opacity = "0%";
    document.querySelector(".dropdown-content").style.display = "none";
    Dropdown_state = true;
  }  
}

function Option1Click(){
  document.querySelector(".dropbtn").innerHTML = "Non-Vegetarian"
  document.querySelector(".dropdown-content").style.display = "none";
}

function Option2Click(){
  document.querySelector(".dropbtn").innerHTML = "Vegetarian";
  document.querySelector(".dropdown-content").style.display = "none";
}

const Dropdown = ({select, category, selection1, selection2}) => <div class="section_container">
      <div id="dropdownmenu">
        <button class="dropbtn" onClick={DropdownClick}>{select}</button>
          <div class="dropdown-content">
            <a id="non_veg" href="#" onClick={Option1Click}>{selection1}</a>
            <a id="veg" href="#" onClick={Option2Click}>{selection2}</a>
          </div>
      </div>
</div>


Dropdown.defaultProps = {
  select:"Select",
  category:"Meal Type:",
  selection1:"Non-Vegetarian",
  selection2:"Vegetarian"
}
export default Dropdown;








