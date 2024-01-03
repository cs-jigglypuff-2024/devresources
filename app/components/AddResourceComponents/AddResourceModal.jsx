import React from 'react'

const AddResourceModal = ({open, close}) => {
  if (!open) return null
  return (
    <div className="addResourceOverlay">
      <div className='addResourceBody'>
        <div className='closeAddResource'>
          <button onClick={close}>X</button>
        </div>
        <h3>Add New Resource</h3>
        <form className='addResourceForm'>
          <label for="title">Title:</label><br />
          <input type="text" id="title"/><br />
          <label for="url">Link:</label><br />
          <input type="text" id="url"/><br />
          <label for="description">Description:</label><br />
          <textarea type="text" id="description"/><br />
        </form>
      </div>
    </div>
  )
}

export default AddResourceModal