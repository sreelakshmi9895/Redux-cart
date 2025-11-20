import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slices/wishlistSlice'
import Swal from 'sweetalert2'
import { addToCart } from '../redux/slices/cartSlice'


function View() {
const userWishlist = useSelector(state=>state.wishlistReducer)
const userCart = useSelector(state=>state.cartReducer)
const dispatch = useDispatch()

// get product id from url
const {id} = useParams()
console.log(id);
// state for storing product tobe view 
const [product,setProduct] = useState({})
console.log(product);

useEffect(()=>{
  if(sessionStorage.getItem("products")){
    const allProducts = JSON.parse(sessionStorage.getItem("products"))
    setProduct(allProducts.find(item=>item.id==id))
  }
},[])

const handleWishlist = ()=>{
 const existingProduct = userWishlist?.find(item=>item.id==id)
 if(existingProduct){
  // alert("product already in wishlist...")
  Swal.fire({
  title: 'Sorry!',
  text: 'Product already in wishlist...',
  icon: 'error',
  confirmButtonText: 'Ok'
})
 }else{
  // add product to wishlist in redux store - dispatch action
 dispatch(addToWishlist(product))
 }
}

const handleCart = ()=>{
  const existingProduct = userCart?.find(item=>item.id==id)
  dispatch(addToCart(product))
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
        <div className='row my-5'>
  <div className="col-md-6 text-center">
    <img  className='img-fluid' style={{height: "350px"}} src={product?.thumbnail} alt={product?.title} />
    <div className='d-flex justify-content-evenly my-2'>
   <button onClick={handleWishlist} className='btn btn-primary'>ADD TO WISHLIST</button>
    <button className='btn btn-primary'>ADD TO CART</button>
    </div>
  </div>
  <div className="col-md-6">
    <h1>{product?.title}</h1>
    <h3 className='text-danger fw-bolder'>$ {product?.price}</h3>
    <h4>Brand : {product?.brand}</h4>
     <h4>Category : {product?.category}</h4>
    <h4>Description : {product?.description}</h4>
    <h3 className='my-3'>Client Reviews</h3>
    {
      product?.reviews?.length>0?
      product?.reviews?.map((item,index)=>(
      <div key={index} className='border rounded p-3 mb-2 shadow'>
      <p><span className='fw-bolder'>{item?.reviewerName}:</span>{item?.comment}</p>
      <p>Rating : {item?.rating}<FontAwesomeIcon icon={faStar} className='text-warning'/></p>
    </div>
      ))
      : 
      <div>No Client reviews are available.</div>
    }
    </div>
        </div>
      </div>
    </>
  )
}

export default View
