import React from 'react'
import "../index.css"
function Card1(props) {
  return (
    <div className='latest'>
     <div className="card">
      <img src={props.imgsrc} alt="image" className="image1"></img>
      <div className="info">
        <h2 className="category"><i><b>{props.title}</b></i></h2>
        
      </div>
    </div>
    </div>
  )
}

export default Card1