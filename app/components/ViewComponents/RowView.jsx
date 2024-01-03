import React from 'react';
import CardView from '../CardComponents/CardView';
import '../views_styles.scss';
import { useState , useEffect } from 'react';

function RowView( { cards, title }) {
  //these are all cards
  const cardViewArray = cards.map((card) => <CardView card={card}></CardView>);
  
  //__these are just the cards being displayed
  const [cardViewDisplayed , setCardViewDisplayed ] = useState([]);
  
  const [ carouselPage, setCarouselPage ] = useState(0);
  const cardPerPage = 3;
  //function that the button click triggers to change page
  const nextPage = function() {
    //push the cards into cardViewDisplayed based on what page one is on. page 0 starts from card at index 0
    const tempArray = [];
    for (let i = carouselPage; i < cardPerPage+carouselPage ; i++) {
      tempArray.push(cardViewArray[i]);
    }
    setCardViewDisplayed(tempArray);
    setCarouselPage(carouselPage + 1);
  }

  const prevPage = function() {
    //push the cards into cardViewDisplayed based on what page one is on. page 0 starts from card at index 0
    const tempArray = [];
    for (let i = carouselPage+cardPerPage; i > carouselPage ; i--) {
      tempArray.push(cardViewArray[i]);
    }
    setCardViewDisplayed(tempArray);
    setCarouselPage(carouselPage - 1);
  }

  const initCards = cardViewDisplayed.slice(0,3);
  useEffect(() => {
    setCardViewDisplayed([initCards]);
  },[])
  return (
    <div className='grid'>
      <div className='gridHeader'>
        <h2>{ title }</h2>

      </div>
      <div id='gridViewWrapper'>
      <button className="rowButton" onClick={() => {prevPage()}}> {"<"} </button>
        {cardViewDisplayed}
        <button className="rowButton" onClick={() => {nextPage()}}> {">"} </button>
      </div>

    </div>
  );
}

export default RowView;
