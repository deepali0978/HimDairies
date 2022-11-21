import React from 'react'

function Content(props) {
  return (
    <div>
        <h1 style={{fontFamily:"cursive",fontStyle:"italic"}}>{props.head}</h1>
        <div className='contentdiv'>
        <div className='contentdiv1'>
        <img src={props.imgsrc} height="100%" width="100%"/>
        </div>
        <div className='contentdiv2'>
        <p style={{height:'100%',width:'100%'}}>{props.para}</p>
        </div>
    </div>
    </div>
  )
}

export default Content