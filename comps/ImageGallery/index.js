import React from 'react';
import './gallery.css';

const ThaiChickenImg = require('../../images/thaichicken2.jpg');
const ThaiTofuImg = require('../../images/thaitofu1.jpg');
// const ThaiChickenImg = require('../../images/thaichicken2.jpg');
// const ThaiChickenImg = require('../../images/thaichicken2.jpg');
// const ThaiChickenImg = require('../../images/thaichicken2.jpg');

const ImgGallery = ({thai_nonv, thai_veg}) => <div>
<gallery role="gallery">
   <div class="row">
     <div class= "column"></div>
     <img class="gallery_imgs" src={thai_nonv} />
     <img class="gallery_imgs" src={thai_veg} />
   </div>
   <div class="column">
       <img src= "underwater.jpg"></img>
        <img src="ocean.jpg"></img>
   </div>
  </gallery>
</div>

ImgGallery.defaultProps = {
  thai_nonv:ThaiChickenImg,
  thai_veg:ThaiTofuImg
}

export default ImgGallery;
