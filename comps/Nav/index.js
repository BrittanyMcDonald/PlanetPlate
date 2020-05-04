import React from 'react';

import './nav.css';

function HamburgerClick(){
    document.querySelector(".menu_items").style.opacity = "100%";
    document.querySelector(".menu_items").style.display = "flex";
}

function ExitMenu(){
  document.querySelector(".menu_items").style.display = "none";
}

const hamimgpng = require('../../images/hamimg.png');
const exit = require('../../images/exit.png');


const Nav = ({width, exitwidth, onClick, ref, props}) => <div className='menu'> 

  <div className="menu_closed">
      <img id="hamImg" className="hamImg" src={hamimgpng} onClick={HamburgerClick}
      style= {{width:width}}/>
  </div>
  <div className="menu_items">
    <img id="exit_icon" src={exit} onClick={ExitMenu} 
    style={{width:exitwidth}} />
    <div className="menu_items_inner">
      <a href="/">Home</a>
    </div>
    <div className="menu_items_inner">
      <a href="/Tutorial1">Tutorial</a>
    </div>
    <div className="menu_items_inner">
      <a href="/SelectRecipe">Select a Recipe</a>
    </div>
    <div className="menu_items_inner">
      <a href="/ImageGallery">Recipe Gallery</a>
    </div>
  </div>
</div>


Nav.defaultProps = {
  hamimgpng: hamimgpng,
  onClick:HamburgerClick,
  width:50,
  exitwidth:30
}

export default Nav;