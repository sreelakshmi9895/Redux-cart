import React from 'react'
import Heder from '../components/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Cart() {
  return (
    <>
    <Heder/>
      <div className='container py-5'>
     <div className='my-5'>
    <h2 className='text-danger fw-bold'>Cart Summary</h2>
    <div className='row'>
 <div className='col-md-8 border rounded p-5'>
  <table className="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
        <th>Image</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>...</th>
      </tr>
    </thead>
    <tbody>
     <tr>
        <td>1</td>
        <td>title</td>
        <td><img width={'50px'} src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqjITscxG9m4kd3XWgbGSUAnoaX3CV1Qje7KXucQOIbC063kGk1sVc5lp_uJk6mwPWR1nLyTrejVL4HiKCsdiOxFZsJATAhIR6P6yXegwU7YkyCf3Eh8VlNr4" alt="" /></td>
        <td>
          <div className='d-flex'>
    <button className='btn fs-3 fw-bold'>-</button>
    <input style={{width:'50px'}} value={10} type="text" className="form-control" readOnly/>
    <button className='btn fs-3 fw-bold'>+</button>
          </div>
        </td>
        <td>$ 200</td>
        <td><button className='btn btn-danger'><FontAwesomeIcon icon={faTrash}/></button></td>
     </tr>
    </tbody>
  </table>
 </div>
 <div className='col-md-4'>
  <div className='border rounded p-5'>
    <h5 className='fw-bold'>Total Amount : <span className='text-danger'>$ 19.99</span></h5>
    <hr />
    <div className='d-grid mt-2'>
      <button className='btn btn-success'>CHECKOUT</button>
    </div>
  </div>
 </div>
    </div>
     </div>
      </div>
    </>
  )
}

export default Cart
