import { NavLink } from "react-router-dom";

function Navbar({ cartItems }) {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? "text-orange-500 font-semibold"
      : "text-white hover:text-blue-400 transition";

  return (
    <nav className="bg-black text-white px-10 py-4 flex justify-between items-center">

      {/* Logo */}
      <h1 className="text-3xl font-bold">
        Cartify
      </h1>

      {/* Right Section */}
      <div className="flex items-center gap-8">

        {/* Navigation Links */}
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

        {/* Search Box */}
        <div>
          <input
            type="text"
            placeholder="Search products..."
            className="px-4 py-2 rounded-lg text-black bg-white outline-none w-64"
          />
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4 items-center">

          <NavLink to="/login" className={navLinkStyle}>
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition"
          >
            Register
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;