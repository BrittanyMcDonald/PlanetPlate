import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './tutorial1.css';
import CustomButton from '../../comps/Button';
import TutorialStep from '../../comps/TutorialCard';
import TutorialTitle from '../../comps/TutorialHeader';
import Header from '../../comps/Header';
import TutorialSteps from '../../comps/TutorialCard';



const HeaderLogo = require('../../images/LOGO_Horizontal.png');

const Tut1Page = ({logo, color, buttontext}) => {

    return <div id="tutorial1_page">
        <div id="app_header">
            {/* Menu Icon Here */}
            <Header />
        </div>
        <TutorialTitle />
        <TutorialSteps />
        <br />
        {/* This is where the form comp will go */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <p id="instruction1">Then tap "Search" when you're ready to find a recipe.</p>
        <CustomButton text={buttontext} />       

    </div>
}


Tut1Page.defaultProps = {
    logo:HeaderLogo,
    color:"#4797FF",
    buttontext:"Next"
}

export default Tut1Page;