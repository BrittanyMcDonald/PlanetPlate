import React from 'react';

import './recipesteps.css';

const RecipeStep = ({stepnumber, text, fontSize, color}) => <div 
className="recipe_step_container"
>
  <h2 className="recipe_step_header" style={{color:color}}>{stepnumber}</h2>
<p className="recipe_step_text" style={{fontSize:fontSize}}>{text}</p>
</div>

RecipeStep.defaultProps = {
  fontSize:16,
  text:"Season chicken pieces with salt and pepper and marinate for 20 minutes.",
  color:"#000000",
  stepnumber:"Step 1"
}

export default RecipeStep;