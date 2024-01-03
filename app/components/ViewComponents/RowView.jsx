import React from 'react';
import CardView from '../CardComponents/CardView';
import '../views_styles.scss';
function RowView({ cards, title }) {
  console.log('drilled cards in row view:', cards);
  const cardViewArray = cards.map((card) => <CardView card={card}></CardView>);

  return (
    <div id='rowViewWrapper'>
      <h2>{title}</h2>
      {cardViewArray}
    </div>
  );
}

export default RowView;
