import React from 'react'
import './footer.css'
import map from '../assets/assets/map.png'
import logo from '../assets/assets/footer-logo.png'
const Footer = () => {
  return (
    <div className='footer'>
       <div className='contact'>
        <h1>Contact Info</h1>
        < img src={map}/>
       </div>
       <div className='contact-info'>
        <ul>
        <div className='text'>
          <h5>  Hours Of Operations :</h5>
          <p> 2pm to 3Am Daily</p>
        </div>
        <div className='text'>
          <h5> Located :</h5>
          <p> 123 W 45 NewYork</p>
        </div>
        <div className='text'>
          <h5> Phone:</h5>
          <p>(+1)(404)7236423</p>
        </div>
        <div className='text'>
          <h5> FollwUs :</h5>
          <p> @tehranlounge</p>
        </div>
        </ul>


       </div>
       <div className='line'></div>
       <div id='footer-info-2'>
        <ul>
          <li>Home</li>
          <li>MENU</li>
          <li>HOOKAH</li>
          <li>HAPPY HOUR</li>
        </ul>
       </div>
       <div id='footer-info-2'>
        <ul>
          <li>BIG PARTY</li>
          <li>BOOK A TABLE</li>
          
        </ul>
       </div>
       <div className='end-content'>
        <p>Tehran © 2024 All rights reserved.</p>
        <img src={logo}/>
       </div>
    </div>
  )
}

export default Footer
