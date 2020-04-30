import React from 'react';

import '/Users/aneetromana/PlanetPlate/comps/Nav/nav.css';

const hamimgpng = require('/Users/aneetromana/PlanetPlate/images/hamimg.png');
const HeaderLogo = require('../../images/LOGO_Horizontal.png');

const Nav = ({onClick, ref, hamImgpng, props}) => <div className='menu'> 

  <div className="menu_closed">
    <div className='hamImg'>
      <img id="hamImg" className="hamImg" src={hamimgpng} onClick={onClick}/>
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

var Nav_state = true;

function HamburgerClick(){
  if (Nav_state === true){
    document.querySelector(".menu_items").style.opacity = "100%";
    document.querySelector(".menu_items").style.display = "flex";
    Nav_state = false;
  } else if (menu_state === false){
    document.querySelector(".menu_items").style.opacity = "0%";
    document.querySelector(".menu_items").style.opacity = "none";
    Nav_state = true;
  }
  
 Menu.defaultProps = {
    hamimgpng: hamImgpng,
    onClick:HamburgerClick
  }
}

export default Nav;