import React, {useState} from 'react';
import '/Users/aneetromana/Downloads/PlanetPlate-master 2/pages/ImageGallery/selectrecipe.css';
import CustomButton from '../../comps/Button';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';
import StartOver from '../../comps/StartOver';
import Steps from '../../comps/Steps';
import Nav from '../../comps/Nav';
import ImageGallery from '/Users/aneetromana/Downloads/PlanetPlate-master 2/comps/ImageGallery';
import GalleryTitle from '/Users/aneetromana/Downloads/PlanetPlate-master 2/comps/GalleryTitle';

const Tutorial3 = ({step2, instruction2, color, textcolor, buttontext, buttontext2, cardtext, steptext, imagegallery, gallerytitle  }) => {

    return <div id="tutorial3_page">
        <div id="app_header">
            <Nav />
            <Header />
            <GalleryTitle stepnumber={gallerytitle}/>
        </div>
        <ImageGallery stepnumber={imagegallery}  />
        <div id="example">

        </div> 
        <br />
        <br />

        <CustomButton text={buttontext}  /> 
         
        
             

    </div>
}

Tutorial3.defaultProps = {
    color:"#00FFFF",
    textcolor:"#d1d1d1",
    buttontext:"Home Page",
    buttontext2:"Start Over Tutorial",
    steptext:"Step 3",
    step2:"Step 2",
    instruction2:"Etc.",

    imagegallery:"ImageGallery",
    gallerytitle:"GalleryTitle"

}




export default Tutorial3;