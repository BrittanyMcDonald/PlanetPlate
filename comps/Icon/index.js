import React from 'react';


const myImg = require('../../images/hamimg.png');

const Icon = ({img, width}) => <div id="hamimg_container">
  <img id="hamicon" src={img}
  style={{width:width}} />

</div>

Icon.defaultProps = {
  img:myImg,
  width:50
}

export default Icon;