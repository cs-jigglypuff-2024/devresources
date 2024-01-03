import React from 'react'
import TagsView from './TagsView'
import '../views_styles.scss';

function CardView( { card } ) {
  //further destructure card into variables
  // const { 
  //   title, 
  //   url, 
  //   description, 
  //   clicks, 
  //   date_added
  // } = card;
  
  //card will receive, via props: title, description, url, clicks, date_added, type and a list of tags
  //mock props:
  const cards = {
    title: 'Rendering with ReactRouter',
    url: 'url to this',
    description: 'how does router differ from regular react setup',
    clicks: '300',
    date_added: '2 January 2024',
    type: 'article',
    tagList: ['react','interview']
  }

  //note how Tags component is outside the <a>, so that clicking a tag doesn't link to a url.
  return (
    <div className='card'>
      {/* mock cards: */}
      <a href={cards.url}>
        <h2>{cards.title}</h2>
        <p> {cards.description}</p>
        <p> {cards.clicks}</p>
        <p> {cards.date_added}</p>
      </a>
      {/* actual card data: prop drill */}
      {/* <a href={url}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>{clicks}</p>
        <p>{date_added}</p>
      </a> */}
        {/* <TagsView tagList={props.tagList}/> */}
    </div>
  )
}

export default CardView