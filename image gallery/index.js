import React from 'react';
import './gallery.css';


const NavBar = ({}) => <div>
<gallery role="gallery">
   <div class="row">
     <div class= "column"></div>
     <img src="wedding.jpg"></img>
     <img src="rocks.jpg"></img>
   </div>
   <div class="column">
       <img src= "underwater.jpg"></img>
        <img src="ocean.jpg"></img>
   </div>
  </gallery>
</div>

NavBar.defaultProps = {
}

export default NavBar;
