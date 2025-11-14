import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Whishlist from './pages/Whishlist'
import Cart from './pages/Cart'
import View from './pages/View'
import Pnf from './pages/Pnf'
import Footer from './components/Footer'




function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/wishlist' element={<Whishlist/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/products/:id/view' element={<View/>}></Route>
      <Route path='/*' element={<Pnf/>}></Route>
      </Routes> 
      <Footer/>
    </>
  )
}

export default App
