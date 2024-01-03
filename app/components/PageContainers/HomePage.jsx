import React from 'react';
import RowView from '../ViewComponents/RowView';
import '../views_styles.scss'
function HomePage() {
  //fetch queries here, prop drill all returns into appropriate row views below.
  
  //mock cards for homepage
  const cards = [{
    title: "Card Title",
    url: 'localhost:8080',
    description: "lorem ipsum filler text",
  }]

  return (
    <div className='rowView'>
      <RowView cards={cards} />
    </div>
  )
}

export default HomePage