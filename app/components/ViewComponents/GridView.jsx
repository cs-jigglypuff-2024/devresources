import React, { useEffect } from 'react';
import CardView from '../CardComponents/CardView';
import '../views_styles.scss';
import { useState } from 'react';

function GridView({ cards , title }) {
  //these are all cards
  const cardViewArray = cards.map((card) => <CardView card={card}></CardView>);
  return (
    <div className='grid'>
      <div className='gridHeader'>
        <h2>{title}</h2>
      </div>
      <div id='gridViewWrapper'>
        {cardViewArray}
      </div>
    </div>
  );
}

export default GridView;
