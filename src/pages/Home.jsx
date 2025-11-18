import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'


function Home() {
  return (
    <>
    <Header/>
     <div className='container py-5'> 
      <div className='row my-5'>
        <div className='col-md-3 mb-2'>
        <Card style={{ width: '18rem' }}>
      <Card.Img height={'250px'} variant="top" src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTqjITscxG9m4kd3XWgbGSUAnoaX3CV1Qje7KXucQOIbC063kGk1sVc5lp_uJk6mwPWR1nLyTrejVL4HiKCsdiOxFZsJATAhIR6P6yXegwU7YkyCf3Eh8VlNr4" />
      <Card.Body className='text-center'>
        <Card.Title>Card Title</Card.Title>
        <Link to={`/products/:id/view`} className='btn btn-secondary'>View More...</Link>
      </Card.Body>
    </Card>
        </div>
      </div>

     </div>
    </>
  )
}

export default Home
