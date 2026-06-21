import { useState, useEffect } from 'react'
import './index.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("currentUser"))
  );

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {

  
if (currentUser) {

  const savedCart = JSON.parse(
    localStorage.getItem(
      `cart_${ currentUser.email } `
    )
  ) || [];

  setCartItems(savedCart);

} else {

  setCartItems([]);

}


  }, [currentUser]);

  const addToCart = (product) => {

  
const updatedCart = [...cartItems, product];

setCartItems(updatedCart);

if (currentUser) {

  localStorage.setItem(
    `cart_${ currentUser.email }`,
    JSON.stringify(updatedCart)
  );

}


  };

  const removeFromCart = (id) => {

  
const updatedCart = cartItems.filter(
  (item) => item.id !== id
);

setCartItems(updatedCart);

if (currentUser) {

  localStorage.setItem(
    `cart_${ currentUser.email } `,
    JSON.stringify(updatedCart)
  );

}


  };

  return (
    <> <Navbar
      cartItems={cartItems}
      isLoggedIn={isLoggedIn}
      setIsLoggedIn={setIsLoggedIn}
      setCurrentUser={setCurrentUser}
      setCartItems={setCartItems}
    />

      
      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={
            <Products
              addToCart={addToCart}
              isLoggedIn={isLoggedIn}
            />
          }
        />

        <Route
          path="/cart"
          element={
            isLoggedIn ? (
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
              />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          path="/login"
          element={
            <Login
              setIsLoggedIn={setIsLoggedIn}
              setCurrentUser={setCurrentUser}
            />
          }
        />

        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>
    </>


  )
}

export default App
