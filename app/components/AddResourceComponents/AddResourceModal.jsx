import React from 'react'

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
  for (let i = 1; i < 10; i++) {
    multiSelectOptions.push(<option value={`tag #${i}`}>{`tag #${i}`}</option>)
  }
  
  if (!open) return null
  return (
    <div className="addResourceOverlay">
      <div className='addResourceBody'>
        <div className='closeAddResource'>
          <button onClick={close}>X</button>
        </div>
        <h3>Add New Resource</h3>
        <form onSubmit={newResourceHandler} className='addResourceForm'>
          <label>Title:</label><br />
          <input type="text" name='title' id="title"/><br />
          <label>Link:</label><br />
          <input type="text" name='url' id="url"/><br />
          <label>Description:</label><br />
          <textarea type="text" name='description' id="description"/><br />
          <label>Tags:</label>
          <select name="tags" id="tags" multiple>
            {multiSelectOptions}
          </select>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default AddResourceModal