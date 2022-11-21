import React from 'react'
import "../App.css"
function Card(props){
    const image=props.imgsrc;
    return(        
    <div className="facts1" style={{backgroundImage: `url(${image})`
   ,backgroundRepeat: "no-repeat" ,backgroundSize:"cover",
   height:"100%",width:"100%"}}>
    </div>
  ); 
  }
export default Card