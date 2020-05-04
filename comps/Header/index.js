import React from 'react';
import HeaderLine from '../../comps/HeaderLine';

import './header.css';
import HomePage from '../../pages';

function Home() {
  document.querySelector("#app_page").style.opacity = "0";
  setTimeout(function(){
      Router.push("/");
  }, 600)
}

const myImg = require('./LOGO_Horizontal.png');

const Header = ({img, onClick}) => <div id="header_container">
  <img id="logo_header" src={img} onClick={Home} />
  <HeaderLine />
</div>

Header.defaultProps = {
  img:myImg,
}

export default Header;