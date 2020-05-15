import React from 'react';

import './app.css';

const ImageGallery = ({text, fontSize, color}) => <div 
className="tutorial_header"
>
  <h1 id="tutorial_title" style={{color:color}}>Image Gallery</h1>
</div>

ImageGallery.defaultProps = {
  fontSize:16,
  text:"Tutorial",
  color:"#4797FF"
}

export default ImageGallery;