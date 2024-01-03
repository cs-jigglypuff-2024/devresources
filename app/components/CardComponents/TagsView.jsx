import React, { useEffect, useState } from 'react';
import Tag from '../Tag';
import '../views_styles.scss';

function TagsView() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    // Get list of all tags
    fetch('/getTags')
      .then((res) => res.json())
      .then((tags) => {
        console.log('TAGS:', tags);
        setTags(tags);
      })
      .catch((err) => {});
  }, []);

  //map input array from props (props.tagList) to capsule UI elements with links to tagPage view
  const Tags = tags.map((tag) => <Tag tag={tag} />);

  return (
    <>
      <h1>All Tags</h1>
      <div className='tags'>{Tags}</div>
    </>
  );
}

export default TagsView;
