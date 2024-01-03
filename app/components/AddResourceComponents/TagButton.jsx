import React, {useState} from 'react'


const TagButton = ({name}) => {

  const [selected, setSelected] = useState(false)
  const [selectedClass, setSelectedClass] = useState('tagUnselected')

  return (
    <div className='tag'>
      <p>{name}</p>
    </div>
  )
}

export default TagButton