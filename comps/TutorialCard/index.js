import React from 'react';

import './tutorialcard.css';

const TutorialStep = ({background, text, fontSize, color}) => <div 
style={{backgroundColor:background}}
className="tutorial_steps"
>
  <h2 className="tutorial_steps_header" style={{color:color}}>Step 1</h2>
<p className="tutorial_steps_text" style={{fontSize:fontSize}}>{text}</p>
</div>

TutorialStep.defaultProps = {
  fontSize:16,
  text:"Select your Country, Meal type, and Portion Size from the menus below.",
  color:"#ffffff",
  background:"#FF8F3F"
}

export default TutorialStep;