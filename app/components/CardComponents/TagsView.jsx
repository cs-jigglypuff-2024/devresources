import React from 'react';
import '../views_styles.scss';

function TagsView(props) {
  //map input array from props (props.tagList) to capsule UI elements with links to tagPage view
  //for now, two mock tags as paragraphs
  return (
    <div className='tags'>
      <p>tag1</p>
      <p>tag2</p>
    </div>
  );
}

export default TagsView;
