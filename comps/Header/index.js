import React from 'react';
import HeaderLine from '../../comps/HeaderLine';

import './header.css';

const myImg = require('./LOGO_Horizontal.png');

const Header = ({img}) => <div id="header_container">
  <img id="logo_header" src={img} />
  <HeaderLine />
</div>

Header.defaultProps = {
  img:myImg,
}

export default Header;