import React from 'react';
import RowView from '../ViewComponents/RowView';
import '../views_styles.css'
function HomePage() {
  //fetch queries here, prop drill all returns into appropriate row views below.
  return (
    <div className='rowView'>
      HomePage, row view below:
      <RowView/>
    </div>
  )
}

export default HomePage