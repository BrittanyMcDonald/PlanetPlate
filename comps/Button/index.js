import React from 'react';
import './button.css';

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
    alert("Clicked");
}

CustomButton.defaultProps = {
    text:"Get Started",
    color:"#FF8F3F",
    shadow:"#666666",
    onClick:ButtonClick
}

export default CustomButton;