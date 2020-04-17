import React from 'react';

import './header.css';

const myImg = require('./LOGO_Horizontal.png');

const Header = ({img}) => <div>
  <img id="logo_header" src={img} />
</div>

Header.defaultProps = {
  img:myImg
}

export default Header;