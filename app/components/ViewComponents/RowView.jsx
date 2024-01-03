import React from 'react';
import CardView from '../CardComponents/CardView';
import '../views_styles.scss';
function RowView() {
  //map fetched cards to array and pass as props to card view below
  return (
    <div className='rowView'>
      <CardView></CardView>
      <CardView></CardView>
      <CardView></CardView>
    </div>
  )
}

export default RowView