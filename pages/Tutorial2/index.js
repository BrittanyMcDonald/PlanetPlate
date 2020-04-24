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


const Tut2Page = ({opacity, color, buttontext, cardtext, steptext, fontSize}) => {

    return <div id="tutorial2_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps stepnumber={steptext} text={cardtext} />
        <br />
        <div id="example">
            <Ingredients id="ingredient_block" fontSize={10} />
            <CustomButton text={buttontext} color={color} width={100} opacity={50} />
        </div> 
        <br />
        <CustomButton text={buttontext} />       

    </div>
}

//Having trouble resizing the ingredients comp and making that comp and the button comp have around 50%opacity

Tut2Page.defaultProps = {
    color:"#999999",
    buttontext:"Next",
    steptext:"Step 2",
    cardtext:"A page showing your selection and the resulting recipe will be displayed. Click 'Next' to see the steps of the recipe!",
    opacity: 50,
}

export default Tut2Page;