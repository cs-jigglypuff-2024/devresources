import React from 'react'
import TagsView from './TagsView'
import '../views_styles.scss';

function CardView() {
  //card will receive, via props: title, description, url, clicks, date_added, type and a list of tags
  //mock props:
  const props = {
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
      <a href={props.url}>
        <h2>(title)     {props.title}</h2>
        <p>(description){props.description}</p>
        <p>(clicks)     {props.clicks}</p>
        <p>(dateAdded)  {props.date_added}</p>
        <p>(Type)       {props.type}</p>
      </a>
        <TagsView tagList={props.tagList}/>
    </div>
  )
}

export default CardView