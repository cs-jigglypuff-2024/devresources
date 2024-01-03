import React, {useState, useEffect} from 'react'
import TagButton from './TagButton';

const AddResourceModal = ({open, close}) => {

  const newResourceHandler = (e) => {
    // e.preventDefault();
    const obj = {};
    const formData = new FormData(e.currentTarget);
    for (let [key, value] of formData.entries()) {
      obj[key] = value;
    }
    console.log(`Adding:`, obj);
    fetch(`/newResource`, {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(obj)
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((err) => console.log(err))
  }

  
  const multiSelectOptions = []
  useEffect(() => {
    fetch('/getTags')
      .then((response) => response.json())
      .then((data) => {
        for (let i of data) {
          // console.log(i.name)
          // multiSelectOptions.push(<TagButton id={i.id} name={i.name}/>)
          multiSelectOptions.push(<p>Test</p>)
        }
        // console.log(multiSelectOptions)
      })
  }, []);

  
  if (!open) return null
  return (
    <div className="addResourceOverlay">
      <div className='addResourceBody'>
        <div className='closeAddResource'>
          <button onClick={close}>X</button>
        </div>
        <h3>Add New Resource</h3>
        <form onSubmit={newResourceHandler} className='addResourceForm'>
          <label>Title:</label>
          <input type="text" name='title' id="title" required/>
          <label>Link:</label>
          <input type="text" name='url' id="url" required/>
          <label>Description:</label>
          <textarea type="text" name='description' id="description" required/>
          <label>Tags:</label>
          <div className='selectTags'>
            {multiSelectOptions}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddResourceModal