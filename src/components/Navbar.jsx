import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-black text-white px-7 py-2 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold">
        Cartify
      </h1>

      <div className="flex gap-6">
        <NavLink to="/" className={({ isActive }) => isActive ? " text-orange-500" : "white"}>Home</NavLink>

        <NavLink to="/products" className={({ isActive }) => (isActive ? " text-orange-500" : "white")}>Products</NavLink>

        <NavLink to="/cart" className={({ isActive }) => (isActive ? " text-orange-500" : "white")}>
          Cart (0)
        </NavLink>

        <NavLink to="/login" className={({ isActive }) => (isActive ? "text-orange-500" : "white")}>Login</NavLink>

        <NavLink to="/register" className={({ isActive }) => (isActive ? "text-orange-500" : "white")}>Register</NavLink>
      </div>

    </nav>
  );
}

export default Navbar;