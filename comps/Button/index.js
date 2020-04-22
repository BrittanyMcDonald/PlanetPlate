import React from 'react';
import './button.css';
import Link from 'next/link';
import Router from 'next/router';

const CustomButton = ({text, shadow, color, onClick}) => <div 
    style={{backgroundColor:color, boxShadow:"1px 1px 2px "+shadow}}
    className="custom_button_box"
    onClick={onClick}
    >
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick(){
    document.querySelector("#app_page").style.opacity = 0;
    setTimeout(function(){
        Router.push("/Tutorial1");
    }, 1000)
}

CustomButton.defaultProps = {
    text:"Get Started",
    color:"#FF8F3F",
    shadow:"#666666",
    onClick:ButtonClick
}

export default CustomButton;