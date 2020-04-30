import React from 'react';


const myImg = require('/Users/aneetromana/PlanetPlate/images/hamimg.png');

const Icon = ({img}) => <div id="hamimg">
  <img id="hamimg" src={img} />

</div>

Icon.defaultProps = {
  img:myImg,
}

export default Icon;