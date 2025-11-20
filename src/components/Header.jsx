import { faTruckFast,faHeart, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Nav,Container,Navbar,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function Header() {
  const userWishlist = useSelector(state=>state.wishlistReducer)
  const userCart = useSelector(state=>state.cartReducer)
  return (
   <Navbar expand="lg" className="bg-info position-fixed w-100 z-1">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-decoration-none text-light fw-bold'>< FontAwesomeIcon icon={faTruckFast}/> Daily Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='bg-light'/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-md-center">
       <Link to={'/wishlist'}className='text-decoration-none text-light fw-bold'><FontAwesomeIcon icon={faHeart} className='text-danger'/>Wishlist<Badge pill bg="light mx-1">{userWishlist?.length}</Badge></Link>
        <Link to={'/cart'}className='text-decoration-none text-light fw-bold ms-5'><FontAwesomeIcon icon={faCartShopping} className='text-danger'/>Cart<Badge pill bg="light mx-1">{userCart?.length}</Badge></Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
  )
}

export default Header
