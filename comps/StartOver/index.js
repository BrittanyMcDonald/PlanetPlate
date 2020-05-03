import React from 'react';
import './app.css';
import Link from 'next/link';
import Router from 'next/router';

const CustomButton = ({text, shadow, color, onClick, width, opacity}) => <div 
    style={{backgroundColor:color, boxShadow:"1px 1px 2px "+shadow, width:width}}
    className="custom_button_box"
    onClick={onClick}
    >
    <div className="custom_button_box_inner">
        {text}
    </div>
</div>

function ButtonClick(){
}

CustomButton.defaultProps = {
    text:"Start Over",
    color:"#4797ff",
    shadow:"#666666",
    onClick:ButtonClick,
    width:200,
    opacity:100
}

export default CustomButton;