import React, {useState} from 'react'

const TagButton = ({name, key}) => {

  const [selectedTag, setSelectedTag] = useState('notSelected')
  
  return (
    <div id={`${key}`} className={`tag ${selectedTag}`} onClick={() => selectedTag === 'notSelected' ? setSelectedTag('selected') : setSelectedTag('notSelected')}>
      <p>{name}</p>
    </div>
  )
}

export default TagButton