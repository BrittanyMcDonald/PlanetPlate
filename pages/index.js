import React, {useState} from 'react';
import Link from 'next/link';
import Router from 'next/router';
import './app.css';
import CustomButton from '../comps/Button';



const HomeLogo = require('../images/LOGO_Vertical.png');

const HomePage = ({logo, color}) => {

    return <div id="app_page">
    <div id="welcome">
        <img id="home_logo" src={logo} />
        <p id="welcome_msg">PlanetPlate is an app that explores
    dishes from a variety of different cultures around the world, with the
    purposes of inspiring and educating people about different foods.</p>

        <div id="button_group">
            <CustomButton color="#4797FF" /><br />
            <Link href="/Tutorial1"><CustomButton id="tut_button" text="Tutorial" /></Link>
        </div>
    </div>

    </div>
}


HomePage.defaultProps = {
    logo:HomeLogo,
    color:"#4797FF"
}

export default HomePage;