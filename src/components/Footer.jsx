import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div style={{height:'250px'}} className='bg-warning d-flex justify-content-center align-items-center flex-column text-light'>
     <div className='d-flex justify-content-between w-100'>
      <div style={{width:'300px'}} className='intro'>
   <h4>
   <FontAwesomeIcon icon={faTruckFast} /> Daily Cart
   </h4>
  <p>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</p>
  <p>Code licensed Luminar,docs CC BY 3.0</p>
  <p>Currently v5.3.2</p>
   </div>
   <div className='links d-flex flex-column'>
    <h4>Links</h4>
    <Link to={'/'} className='text-light text-decoration-none'>Home</Link>
    <Link to={'/wishlist'} className='text-light text-decoration-none'>Wishlist</Link>
    <Link to={'/cart'} className='text-light text-decoration-none'>Cart</Link>
   </div>
   <div className='links d-flex flex-column'>
    <h4>Guides</h4>
    <a href={'https://react-bootstrap.github.io/'} className='text-light text-decoration-none'>React</a>
    <a href={'https://react-bootstrap.github.io/'} className='text-light text-decoration-none'>React Bootsrap</a>
    <a href={'https://react-bootstrap.github.io/'} className='text-light text-decoration-none'>React Router Dom</a>
   </div>
   <div className="d-flex flex-column">
    <h4>Contact Us</h4>
    <div className='d-flex'>
      <input type="text" className='form-control' placeholder='Enter your email'/>
      <div className='btn'><FontAwesomeIcon icon={faArrowRight} className='text-light'/></div>
    </div>
    <div className='mt-5 d-flex justify-content-between'>
      <FontAwesomeIcon icon={faFacebookF}/>
      <FontAwesomeIcon icon={faWhatsapp}/>
      <FontAwesomeIcon icon={faInstagram}/>
      <FontAwesomeIcon icon={faTwitter}/>
      <FontAwesomeIcon icon={faEnvelope}/>
    </div>
   </div>
    </div>
     <p>Copyright © 2025 Daily Cart. All rights reserved.</p>
    </div>
  )
}

export default Footer
