import React from 'react'
import Card1 from './Card1'
import aalu from '../Images/aalu.jpg'
import momos from '../Images/momos.jpg'
import dhido from '../Images/didho.jpg'
import Aloo from '../Images/Aloo tama bodi.jpg'
import sukuti from '../Images/sukuti.jpg'
import samay from '../Images/samay baji.jpg'
import {Link} from 'react-router-dom';
function Food() {
  return (
    <div className='food'>
      <h1 className='heading'>Home is wherever I'm with food.</h1>
      <Link to="/Alu">
      <Card1
      imgsrc={aalu}
      title="Alu kauli ko tarkari"
      
      />
      </Link>
     <Link to="/Momo">
      <Card1
      imgsrc={momos}
      title="Momos"
      
      />
      </Link>
      <Link to="/Momo">
     <Card1
      imgsrc={dhido}
      title="Dhido"
      
      />
      </Link>
      <Link to="/Momo">
     <Card1
      imgsrc={Aloo}
      title="Aloo tama bodi"
      
      />
      </Link>
      <Link to="/Momo">
      <Card1
      imgsrc={sukuti}
      title="Sukuti"
      
      />
      </Link>
      <Link to="/Momo">
      <Card1
      imgsrc={samay}
      title="Samay Baji"
      
      />
      </Link>
      
    </div>
  )
}

export default Food