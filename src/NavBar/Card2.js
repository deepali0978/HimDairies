import React from 'react'
import "../App.css"
function Card2(props) {
  return (
    <div className='d'>
        <div style={{padding:"15px"}} className="d1">
        <img src={props.imgsrc} height="180px" width="180px"/>
       </div>
       <div className="d2">
        <h4 style={{color:"black"}}>{props.head}</h4>
        <div style={{fontSize:'11px',color:"black"}}><b>{props.title}</b></div></div>
        </div>
    
  )
}

export default Card2