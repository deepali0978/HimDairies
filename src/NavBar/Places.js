import React from 'react'
import Card1 from './Card1'
import "../App.css"
import {Link} from 'react-router-dom';
import leh from "../Images/leh.jpg"
import Malana from "../Images/Malana.jpg"
import kasol from "../Images/kasol.jpg"
import spiti from "../Images/spiti.jpg"
import ziro from "../Images/Ziro.jpg"
import rishikesh from "../Images/rishikesh.jpg"
function Places() {
  return (
    <div className='places'>
      <h1 className='heading'>We wander for distraction, but we travel for fulfillment.”  Hilaire Belloc</h1>
    <Link to="/Leh"> <Card1
      imgsrc={leh}
      title="Leh-Ladakh"
      
      />
      </Link>
      <Link to="/Malana">
     <Card1
      imgsrc={Malana}
      title="Malana"
      
      />
      </Link>
      <Link to="/Leh">
     <Card1
      imgsrc={kasol}
      title="Kasol"
      
      />
      </Link>
      <Link to="/Leh">
     <Card1
      imgsrc={spiti}
      title="Spiti Valley"
      
      />
      </Link>
      <Link to="/Leh">
      <Card1
      imgsrc={ziro}
      title="Ziro"
      
      />
      </Link>
      <Link to="/Leh">
      <Card1
      imgsrc={rishikesh}
      title="Rishikesh"
      
      />
      </Link>
    </div>
  )
}

export default Places