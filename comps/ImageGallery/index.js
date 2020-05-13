import React from 'react';
import './gallery.css';


const BreakfasttacosImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/breakfasttacos1.jpg');
const FettucinialredoImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/fettucinealfredo.jpg');
const CucumberSaladImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/CucumberSalad.jpg');
const ItalianFritataImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/ItalianFritata.jpg');
const SausageStrataImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/SausageStrata.jpg');
const SopadelimaImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/sopadelima3.jpg');
const HuevosImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/huevosrancheros1.jpeg');
const PastaImg = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/SausagePastaItalian.jpg');
const PapaTacos = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/tacosdepapa2.jpg');
const ThaiChicken = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/thaichicken2.jpg');
const ThaiTofu = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/thaitofu1.jpg');
const PadThai = require('/Users/aneetromana/Downloads/PlanetPlate-master 3/images/padthai2.jpg');


const ImgGallery = ({tacomeat,pasta, cucumber, eggs, strata, lima, moretacos, meatpasta, tacospapa, thai, tofu, padthai}) => <div>
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

ImgGallery.defaultProps = {
  tacomeat:BreakfasttacosImg,
  pasta:FettucinialredoImg,
  cucumber:CucumberSaladImg,
  eggs:ItalianFritataImg,
  strata:SausageStrataImg,
  lima:SopadelimaImg,
  moretacos:HuevosImg,
  meatpasta:PastaImg,
  tacospapa:PapaTacos,
  thai:ThaiChicken,
  tofu:ThaiTofu,
  padthai:PadThai
}

export default ImgGallery;
