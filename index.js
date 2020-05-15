import React from 'react';
import './gallery.css';


const BreakfasttacosImg = require('../../images/breakfasttacos1.jpg');
const FettucinialredoImg = require('../../images/fettucinealfredo.jpg');
const CucumberSaladImg = require('../../images/CucumberSalad.jpg');
const SausageStrataImg = require('../../images/SausageStrata.jpg');
const SopadelimaImg = require('../../images/sopadelima3.jpg');
const HuevosImg = require('../../images/huevosrancheros1.jpeg');
const PastaImg = require('../../images/SausagePastaItalian.jpg');
const PapaTacos = require('../../images/tacosdepapa2.jpg');
const ThaiChicken = require('../../images/thaichicken2.jpg');
const ThaiTofu = require('../../images/thaitofu1.jpg');
const PadThai = require('../../images/padthai2.jpg');


const ImageGallery = ({tacomeat,pasta, cucumber, eggs, strata, lima, moretacos, meatpasta, tacospapa, thai, tofu, padthai}) => <div>
<gallery role="gallery">
   <div class="row">
     <div class= "column"></div>
     <img class="gallery_imgs" src={cucumber} />
     <img class="gallery_imgs" src={strata} />
     <img class="gallery_imgs" src={lima} />
     <img class="gallery_imgs" src={moretacos} />
     <img class="gallery_imgs" src={tacospapa} />
     <img class="gallery_imgs" src={thai} />
     <img class="gallery_imgs" src={padthai} />
     <img class="gallery_imgs" src={tacomeat} />
     <img class="gallery_imgs" src={pasta} />
     <img class="gallery_imgs" src={eggs} />
     <img class="gallery_imgs" src={meatpasta} />
   <img class="gallery_imgs" src={tofu} />

 
   </div>

  </gallery>
</div>

ImageGallery.defaultProps = {
  tacomeat:BreakfasttacosImg,
  pasta:FettucinialredoImg,
  cucumber:CucumberSaladImg,
  strata:SausageStrataImg,
  lima:SopadelimaImg,
  moretacos:HuevosImg,
  meatpasta:PastaImg,
  tacospapa:PapaTacos,
  thai:ThaiChicken,
  tofu:ThaiTofu,
  padthai:PadThai
}

export default ImageGallery;
