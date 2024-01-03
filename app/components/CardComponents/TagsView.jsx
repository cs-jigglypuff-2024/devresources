import React from 'react';
import Tag from '../Tag';
import '../views_styles.scss';

function TagsView() {
  let tags = [];

  // Get list of all tags
  fetch('/getTags')
    .then((res) => res.json())
    .then((tagsArr) => {
      console.log('TAGS:', tagsArr);
      tags = tagsArr;
    })
    .catch((err) => {});

  //map input array from props (props.tagList) to capsule UI elements with links to tagPage view
  const Tags = tags.map((tag) => <Tag tag={tag} />);
  //for now, two mock tags as paragraphs
  return <div className='tags'>{Tags}</div>;
}

export default TagsView;
