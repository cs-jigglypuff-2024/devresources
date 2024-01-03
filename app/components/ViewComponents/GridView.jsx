import React from 'react'
import CardView from '../CardComponents/CardView'
import '../views_styles.scss';

function GridView({ cards }) {
  //map received props array to components and return below in a flexbox with flex-flow: row, wrap
  console.log('drilled cards in grid view:',cards);
  const cardViewArray = cards.map( (card) => {
    <CardView card={card} ></CardView>
  }) 
   
  return (
    <div className="grid">
      GridView
      {cardViewArray}
    </div>
  )
}

export default GridView