import React from 'react'

function Write() {
  return (
    <div>
      <form>
        
        <label><b>Name</b></label>
        <input type="text" required/>
        <br></br>
        <br></br>
        <b><label>Select the content in which you want to add</label></b>
        <br></br>
        <select name="content" id="co1" required>
          <option value="facts"><b>Facts</b></option>
          <option value="Food"><b>Food</b></option>
          <option value="places"><b>Places</b></option>
          <option value="history"><b>History</b></option>
          <option value="Latest"><b>Latest</b></option>

        </select>
        <br></br><br></br>
        <label><b>Upload Image  </b></label>
        
        <input type="file"/>
        <br></br><br></br>
        <label><b>Write your content</b></label>
        <br></br>
        <br></br>
        <textarea rows="10" cols="50" required></textarea>
        <br></br>
        <br></br>
        <button type="submit" className='btn'>Submit</button>
        
      </form>
    </div>
  )
}

export default Write