import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import '../../pages/Tutorial3/tutorial3.css';
import CustomButton from '../../comps/Button';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';
import StartOver from '../../comps/StartOver';
import Steps from '../../comps/Steps';
import Nav from '../../comps/Nav';

function RestartTutClick() {
    document.querySelector("#tutorial3_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/Tutorial1");
    }, 600)
}

function HomeClick() {
    document.querySelector("#tutorial3_page").style.opacity = "0";
    setTimeout(function(){
        Router.push("/");
    }, 600)
}

const Tutorial3 = ({step2, instruction2, color, textcolor, buttontext, buttontext2, cardtext, steptext,  }) => {

    return <div id="tutorial3_page">
        <div id="app_header">
            <Nav />
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps stepnumber={steptext} text={cardtext} />
        <div id="example">
            <Steps id="ingredient_block" fontSize={18} />
            <Steps id="ingredient_block" fontSize={18} stepnumber={step2} text={instruction2} />
        </div> 
        <br />
        <br />
        <StartOver text={buttontext2} onClick={RestartTutClick} /> 
        <br />  
        <CustomButton text={buttontext} onClick={HomeClick} /> 
         
        
             

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
    cardtext:"The steps in the recipe will now be displayed! Keep Scrolling further down the page to see photos and videos of the meal! Or simply tap Start Over to choose a different recipe",

}




export default Tutorial3;