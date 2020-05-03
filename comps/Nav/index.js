import React from 'react';

import './nav.css';

var Nav_state = true;
function HamburgerClick(){
  if (Nav_state === true){
    document.querySelector(".menu_items").style.opacity = "100%";
    document.querySelector(".menu_items").style.display = "flex";
    Nav_state = false;
  } else if (Nav_state === false){
    document.querySelector(".menu_items").style.opacity = "0%";
    document.querySelector(".menu_items").style.display = "none";
    Nav_state = true;
  }  
}

const hamimgpng = require('../../images/hamimg.png');


const Nav = ({width, onClick, ref, props}) => <div className='menu'> 

  <div className="menu_closed">
    <div className='hamImg'>
      <img id="hamImg" className="hamImg" src={hamimgpng} onClick={HamburgerClick}
      style= {{width:width}}/>
  </div>
  </div>
  <div className="menu_items">
    <div className="menu_items_inner">
      <a href="#Tutorial">Tutorial</a>
    </div>
    <div className="menu_items_inner">
      <a href="#Tutorial">Find a Recipe</a>
    </div>
    <div className="menu_items_inner">
      <a href="#Tutorial">Image Gallery</a>
    </div>
  </div>
</div>


Nav.defaultProps = {
  hamimgpng: hamimgpng,
  onClick:HamburgerClick,
  width:50
}

export default Nav;