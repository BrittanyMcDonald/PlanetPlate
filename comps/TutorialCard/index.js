import React from 'react';

import './tutorialcard.css';

const TutorialStep = ({stepnumber, background, text, fontSize, color}) => <div 
style={{backgroundColor:background}}
className="tutorial_steps"
>
  <h2 className="tutorial_steps_header" style={{color:color}}>{stepnumber}</h2>
<p className="tutorial_steps_text" style={{fontSize:fontSize}}>{text}</p>
</div>

TutorialStep.defaultProps = {
  fontSize:16,
  text:"Select your Country, Meal type, and Portion Size from the buttons displayed on the Selection Page.",
  color:"#ffffff",
  background:"#FF8F3F",
  stepnumber:"Step 1"
}

export default TutorialStep;