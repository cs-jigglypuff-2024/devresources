import React from 'react'
import CardView from '../CardComponents/CardView'
import '../views_styles.css';

function GridView() {
  //map received props array to components and return below in a flexbox with flex-flow: row, wrap
  
  return (
    <div className="grid">
      GridView
      <CardView></CardView>
      <CardView></CardView>
      <CardView></CardView>
      <CardView></CardView>
      <CardView></CardView>
      <CardView></CardView>
    </div>
  )
}

export default GridView