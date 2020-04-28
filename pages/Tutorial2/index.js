import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './tutorial2.css';
import CustomButton from '../../comps/Button';
import TutorialStep from '../../comps/TutorialCard';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';
import Ingredients from '../../comps/Ingredients';


const Tut2Page = ({color, textcolor, buttontext, cardtext, steptext, fontSize}) => {

    return <div id="tutorial2_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps stepnumber={steptext} text={cardtext} />
        <br />
        <div id="example">
            <Ingredients id="ingredient_block" color={textcolor} fontSize={10} />
            <CustomButton text={buttontext} color={color} width={100} />
        </div> 
        <br />
        <CustomButton text={buttontext} />       

    </div>
}

Tut2Page.defaultProps = {
    color:"#dedede",
    textcolor:"#d1d1d1",
    buttontext:"Next",
    steptext:"Step 2",
    cardtext:"A page showing your selection and the resulting recipe will be displayed. When you're ready, click 'Next' to see the steps to your chosen recipe!",
}

export default Tut2Page;