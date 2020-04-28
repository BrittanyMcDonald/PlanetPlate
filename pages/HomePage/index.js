import React, {useState} from 'react';
import './homepage.css';
import CustomButton from '../../comps/Button';
import Link from 'next/link';
import Router from 'next/router';


const HomeLogo = require('../../images/LOGO_Vertical.png');

const HomePage = ({logo, color}) => {


    return <div id="home_page">
    <div id="welcome">
        <img id="home_logo" src={logo} />
        <p id="welcome_msg">PlanetPlate is an app that explores
    dishes from a variety of different cultures around the world, with the
    purposes of inspiring and educating people about different foods.</p>

        <div id="button_group">
            <CustomButton color="#4797FF" /><br />
            <CustomButton id="tut_button" text="Tutorial" />
        </div>
    </div>

    </div>
}


HomePage.defaultProps = {
    logo:HomeLogo,
    color:"#4797FF"
}

export default HomePage;