import React from 'react'
import CardView from '../CardComponents/CardView'

function GridView() {
  //map received props array to components and return below in a flexbox with flex-flow: row, wrap
  return (
    <div>
      GridView
      <CardView></CardView>
    </div>
  )
}

export default GridView