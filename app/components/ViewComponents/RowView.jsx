import React from 'react';
import CardView from '../CardComponents/CardView';
import '../views_styles.scss';
function RowView( { cards }) {

  console.log('drilled cards in grid view:',cards);
  const cardViewArray = cards.map( (card) => {
    <CardView card={card} ></CardView>
  })  
  
  return (
    <div className='rowViewWrapper'>
      <CardView></CardView>
      <CardView></CardView>
      <CardView></CardView>
      {cardViewArray}
    </div>
  )
}

export default RowView