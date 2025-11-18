import React from 'react'
import Header from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faStar} from '@fortawesome/free-solid-svg-icons'

function View() {
  return (
    <>
    <Header/>
      <div className='container py-5'>
        <div className='row my-5'>
  <div className="col-md-6 text-center">
    <img  className='img-fluid' style={{height: "350px"}} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqjITscxG9m4kd3XWgbGSUAnoaX3CV1Qje7KXucQOIbC063kGk1sVc5lp_uJk6mwPWR1nLyTrejVL4HiKCsdiOxFZsJATAhIR6P6yXegwU7YkyCf3Eh8VlNr4" alt="" />
    <div className='d-flex justify-content-evenly my-2'>
   <button className='btn btn-primary'>ADD TO WISHLIST</button>
    <button className='btn btn-primary'>ADD TO CART</button>
    </div>
  </div>
  <div className="col-md-6">
    <h1>title</h1>
    <h3 className='text-danger fw-bolder'>$ price</h3>
    <h4>Brand : </h4>
     <h4>Category : </h4>
    <h4>Description : </h4>
    <h3 className='my-3'>Client Reviews</h3>
    <div className='border rounded p-3 shadow'>
      <p><span className='fw-bolder'>username:</span>message</p>
      <p>Rating : number <FontAwesomeIcon icon={faStar} className='text-warning'/></p>
    </div>

  </div>
        </div>
      </div>
    </>
  )
}

export default View
