import React from 'react';

import './tutorialheader.css';

const TutorialTitle = ({text, fontSize, color}) => <div 
className="tutorial_header"
>
  <h1 id="tutorial_title" style={{color:color}}>Tutorial</h1>
</div>

TutorialTitle.defaultProps = {
  fontSize:16,
  text:"Tutorial",
  color:"#4797FF"
}

export default TutorialTitle;