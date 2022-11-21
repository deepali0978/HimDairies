import React from 'react'
import "../App.css"
function Card3(props) {
    const img=props.imgsrc;
  return (
    <div style={{backgroundImage: `url(${img})`,backgroundRepeat: "no-repeat" ,backgroundSize:"cover",marginLeft:"25%",
  }} className="card3div">
     <div className="cd1">
        <h3>{props.text}</h3>
     </div>
    </div>
  )
}

export default Card3