import React from 'react'
import '../App.css'
import phone from '../phone.png'
import email from '../email.png'
function Contact() {
  return (
    <div className='contactMain'>
      <div className='contacts'>
      <a href="tel:+91 8626884838"> <img src={phone} height="100px"></img></a>
        <a href = "mailto:deepalisharma170715@.com"><img src={email} height="100px"></img></a>
        <br></br><br></br>
        <form>
         <b><label className='l'>Email Address </label></b>
         <input type="email" required></input>
         <br></br>
         <br></br>
         <b><label className='l'>Phone Number </label></b>
         <input type="number" required maxlength='10'/>
         <br></br><br></br>
         <b><label className='l'>Your FeedBack</label></b>
         <br></br><br></br>
         <textarea rows="10" cols="50" required></textarea>
         <br></br><br></br>
         <button type="submit" className='btn'>Submit</button>
         </form>
      </div>
    </div>
  )
}

export default Contact