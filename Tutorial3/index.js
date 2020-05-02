import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '/Users/aneetromana/PlanetPlate/pages/Tutorial3/app.css';
import CustomButton from '../../comps/Button';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';
import StartOver from'/Users/aneetromana/PlanetPlate/comps/StartOver';
import Steps from '/Users/aneetromana/PlanetPlate/comps/Steps';


const Tutorial3 = ({color, textcolor, buttontext, buttontext2, cardtext, steptext,  }) => {

    return <div id="tutorial3_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps stepnumber={steptext} text={cardtext} />
        <div id="example">
            <Steps id="ingredient_block" fontSize={18} />
        </div> 
        <br />
        <br />
        <StartOver text={buttontext2} />   
        <CustomButton text={buttontext} /> 
         
        
             

    </div>
}

Tutorial3.defaultProps = {
    color:"#00FFFF",
    textcolor:"#d1d1d1",
    buttontext:"Home Page",
    buttontext2:"StartOver",
    steptext:"Step 3",
    cardtext:"The steps in the recipe will now be displayed! Keep Scrolling further down the page to see photos and videos of the meal! Tap Start Over to choose a different recipe",

}




export default Tutorial3;