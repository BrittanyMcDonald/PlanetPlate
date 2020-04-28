import React from 'react';

import './headerline.css';

const HeaderLine = () => <div id="line_container">
  <hr id="header_linebreak"></hr>
</div>

HeaderLine.defaultProps = {
    linecolor:"#000000"
}

export default HeaderLine;