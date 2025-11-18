import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <div style={{height:'80vh'}} className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='fw-bolder'>404</h1>
      <img width={'20%'} src="https://cdnl.iconscout.com/lottie/premium/thumb/404-error-page-animation-gif-download-3299960.gif" alt="" />
      <h4>Look like You're Lost</h4>
      <p>The page you are looking for does not exist</p>
      <Link to={"/"} className="btn btn-primary">Back to Home</Link>
    </div>
  )
}

export default Pnf
