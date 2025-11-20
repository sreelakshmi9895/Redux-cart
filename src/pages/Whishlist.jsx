import React from 'react'
import Header from '../components/Header'
import { Card } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeartCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeWishlistItem } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function Whishlist() {
  const userWishlist = useSelector(state=>state.wishlistReducer) 
  const userCart = useSelector(state=>state.cartReducer)
  const dispatch = useDispatch()

  const handleCart = (product)=>{
    const existingProduct = userCart?.find(item=>item.id==product.id)
    dispatch(addToCart(product))
    dispatch(removeWishlistItem(product.id))
     Swal.fire({
    title: 'Completed!',
    text:existingProduct? `Quantity of ${product.title}, is updated successfully`: 'Product added to your cart...',
    icon: 'success',
    confirmButtonText: 'Ok'
  })
  
  }

  return (
    <>
    <Header/>
      <div className='container py-5'>
        {/* wishlist with content */}
       {
        userWishlist?.length>0?
        <div className='row my-5'>
      {
        userWishlist?.map(product=>(
        <div className='col-md-3 mb-2'>
          {/* card-react  bootstrap */}
        <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src={product?.thumbnail} />
      <Card.Body className='text-center'>
        <Card.Title>{product?.title}</Card.Title>
        <div className='d-flex justify-content-evenly my-1'>
   <button onClick={()=>dispatch(removeWishlistItem(product?.id))} className='btn text-danger fs-5'><FontAwesomeIcon icon={faHeartCircleXmark}/></button>
    <button onClick={()=>handleCart(product)} className='btn text-success fs-5'><FontAwesomeIcon icon={faCartPlus}/></button>
        </div>
      </Card.Body>
    </Card>
        </div>
        ))
      }
        </div>
        :
        <div style={{height:'80vh'}} className='d-flex flex-column justify-content-center align-items-center'>
          <img className='w-25'  src="https://assets.streamlinehq.com/image/private/w_800,h_800,ar_1/f_auto/v1/icons/seoul/shopping/shopping/empty-cart-9p91f0l3qq8hn5t9m6fqzl.png?_a=DATAg1AAZAA0" alt="empty cart" />
          <h3>Wishlist is empty</h3>
          <Link to={'/'} className="btn btn-primary">Add more</Link>
        </div>
        }
      </div>

    </>
  )
}

export default Whishlist
