import React from 'react'

function Facts(props) {
    const img=props.imgsrc;
  return (
         
  <div className="facts1" style={{backgroundImage: `url(${img})`,backgroundRepeat: "no-repeat" ,backgroundSize:"cover",
  height:"100%",width:"100%"}}>
  
  </div>
  )
}

export default Facts