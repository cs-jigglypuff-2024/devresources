import React from 'react';

import './views_styles.scss';
function SideMenu() {
  //parent container for router that chooses between pages

  return (
    <div id='sideMenu'>
      <div className='tag' id='React'>
        #react
      </div>
      <div className='tag' id='interview-prep'>
        #interview-prep
      </div>
    </div>
  );
}

export default SideMenu;
