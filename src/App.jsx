import { useState } from 'react'
import './index.css'
import { Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'

function App() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
  setCartItems([...cartItems, product]);
};

  return (
    <>

   <Navbar cartItems={cartItems} />

    <Routes>

    <Route path='/' element={<Home/>}/>

    <Route
  path="/products"
  element={
    <Products addToCart={addToCart} />
  }
/>

    <Route
  path="/cart"
  element={<Cart cartItems={cartItems} />}
/>

    <Route path='/login' element={<Login/>}/>

    <Route path='/register' element={<Register/>}/>

    </Routes>
    
    </>
  )
}

export default App
