import React from 'react';

import '/Users/aneetromana/Downloads/PlanetPlate-master 2/comps/GalleryTitle/gallery.css';

const GalleryTitle = ({text, fontSize, color}) => <div 
className="tutorial_header"
>
  <h1 id="tutorial_title" style={{color:color}}>Recipe Gallery</h1>
</div>
GalleryTitle.defaultProps = {
  fontSize:16,
  text:"Recipe Gallery",
  color:"#4797FF"
}

export default GalleryTitle;