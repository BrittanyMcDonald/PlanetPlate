import React from 'react';
import './gallery.css';


const NavBar = ({}) => <div>
<gallery role="gallery">
   <div class="row">
     <div class= "column"></div>
     <img src="pasta.jpg"></img>
     <img src="tacos.jpg"></img>
   </div>
   <div class="column">
       <img src= "miso soup.jpg"></img>
        <img src="pizza.jpg"></img>
   </div>
  </gallery>
</div>

NavBar.defaultProps = {
}

export default NavBar;
