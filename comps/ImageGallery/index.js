import React from 'react';
import './gallery.css';
import Router from 'next/router';


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
  document.querySelector("#gallerypage").style.opacity = "0";
  setTimeout(function(){
      Router.push("/../../pages/ThaiBreakfastSteps");
  }, 600)
}



const ImgGallery = ({tacomeat,pasta, cucumber, eggs, strata, lima, moretacos, meatpasta, tacospapa, thai, tofu, padthai}) => <div>
<gallery role="gallery">
    <div id="gallerypage" class="row">
     <div class= "column"></div>
     <img id="cucumberpage" class="gallery_imgs" src={cucumber} onClick={CucumberClick}/>
     {/* Brittany: I'm sorry, I only noticed these weren't linked to their respective recipes at around 11:10pm, May 15th.. theres no time to correct it without rebuilding the gallery. For the record, I would have built this page a little differently, and added the onclicks to each different recipe page within the Image Gallery page itself, and used the RecipeImage comp within the image gallery page, which would have enabled me to link them properly. */}
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
