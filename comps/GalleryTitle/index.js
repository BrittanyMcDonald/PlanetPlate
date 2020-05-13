import React from 'react';

import '/Users/aneetromana/Downloads/PlanetPlate-master 3/comps/GalleryTitle/app.css';

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