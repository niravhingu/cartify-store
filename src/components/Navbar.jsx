import { NavLink } from "react-router-dom";

function Navbar({
cartItems,
isLoggedIn,
setIsLoggedIn,
setCurrentUser,
setCartItems
}) {

const handleLogout = () => {


localStorage.removeItem("isLoggedIn");
localStorage.removeItem("currentUser");

setIsLoggedIn(false);
setCurrentUser(null);
setCartItems([]);


};

const navLinkStyle = ({ isActive }) =>
isActive
? "text-orange-500 font-semibold"
: "text-white hover:text-blue-400 transition";

return ( <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">


  <h1 className="text-3xl font-bold">
    Cartify
  </h1>

  <div className="flex items-center gap-8">

    <div className="flex gap-6">

      <NavLink to="/" className={navLinkStyle}>
        Home
      </NavLink>

      <NavLink to="/products" className={navLinkStyle}>
        Products
      </NavLink>

      <NavLink to="/cart" className={navLinkStyle}>
        Cart ({cartItems.length})
      </NavLink>

    </div>

    <div>
      <input
        type="text"
        placeholder="Search products..."
        className="px-4 py-2 rounded-lg text-black bg-white outline-none w-64"
      />
    </div>

    <div className="flex gap-4 items-center">

      {isLoggedIn ? (
        <button
          onClick={handleLogout}
          className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      ) : (
        <>
          <NavLink
            to="/login"
            className={navLinkStyle}
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Register
          </NavLink>
        </>
      )}

    </div>

  </div>

</nav>


);
}

export default Navbar;
