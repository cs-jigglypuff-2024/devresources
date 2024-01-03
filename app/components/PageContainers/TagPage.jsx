import React from 'react';
import RowView from '../ViewComponents/RowView';

function TagPage() {

  //fetch queries here, prop drill all returns into appropriate row views below.
  return (
    <div>
    <RowView cards={newCards} title={'New'}></RowView>
    <RowView cards={newCards} title={'Trending'}></RowView>
    </div>
  )
}

export default TagPage