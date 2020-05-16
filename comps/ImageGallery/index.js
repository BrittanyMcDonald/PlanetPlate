import React from 'react';
import './gallery.css';


const BreakfasttacosImg = require('../../images/breakfasttacos1.jpg');
const FettucinialredoImg = require('../../images/fettucinealfredo.jpg');
const CucumberSaladImg = require('../../images/CucumberSalad.jpg');
const ItalianFritataImg = require('../../images/ItalianFritata.jpg');
const SausageStrataImg = require('../../images/SausageStrata.jpg');
const SopadelimaImg = require('../../images/sopadelima3.jpg');
const HuevosImg = require('../../images/huevosrancheros1.jpeg');
const PastaImg = require('../../images/SausagePastaItalian.jpg');
const PapaTacos = require('../../images/tacosdepapa2.jpg');
const ThaiChicken = require('../../images/thaichicken2.jpg');
const ThaiTofu = require('../../images/thaitofu1.jpg');
const PadThai = require('../../images/padthai2.jpg');

function CucumberClick() {
  document.querySelector("#cucumberpage").style.opacity = "0";
  setTimeout(function(){
      Router.push("../pages/CucumberSaladSteps");
  }, 600)
}



const ImgGallery = ({tacomeat,pasta, cucumber, eggs, strata, lima, moretacos, meatpasta, tacospapa, thai, tofu, padthai}) => <div>
<gallery role="gallery">
    <div class="row">
     <div class= "column"></div>
     <img id="cucumberpage" class="gallery_imgs" src={cucumber} onClick={CucumberClick}/>
     <img id="stratapage" class="gallery_imgs" src={strata} />
     <img id="limapage" class="gallery_imgs" src={lima} />
     <img id="rancherospage" class="gallery_imgs" src={moretacos} />
     <img id="papapage" class="gallery_imgs" src={tacospapa} />
     <img id="currypage" class="gallery_imgs" src={thai} />
     <img id="padthaipage" class="gallery_imgs" src={padthai} />
     <img id="papapage" class="gallery_imgs" src={tacomeat} />
     <img id="fettpage" class="gallery_imgs" src={pasta} />
     <img id="fritatapage" class="gallery_imgs" src={eggs} />
     <img id="sausagepastapage" class="gallery_imgs" src={meatpasta} />
     <img id="nonvegtofupage" class="gallery_imgs" src={tofu} />

 
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
