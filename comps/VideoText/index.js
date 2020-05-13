import React from 'react';

import './videotext.css';

const VideoText = ({caption, fontSize, color}) => <div 
className="videotext_container"
>
<p className="videocaption" style={{fontSize:fontSize}}>{caption}</p>
</div>

VideoText.defaultProps = {
  fontSize:16,
  caption:"Play the video above to help guide you through the Thai Red Chicken Curry recipe!",
  color:"#000000",
}

export default VideoText;