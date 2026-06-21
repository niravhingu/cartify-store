import React from 'react'
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn, setCurrentUser }) {

const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(false);
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
e.preventDefault();


if (email === "" || password === "") {
  alert("Please fill all fields");
  return;
}

if (password.length < 8) {
  alert("Password must be at least 8 characters");
  return;
}

const users =
  JSON.parse(localStorage.getItem("users")) || [];

const foundUser = users.find(
  (user) =>
    user.email === email &&
    user.password === password
);

if (foundUser) {

  localStorage.setItem(
    "currentUser",
    JSON.stringify(foundUser)
  );

  localStorage.setItem(
    "isLoggedIn",
    "true"
  );

  setCurrentUser(foundUser);
  setIsLoggedIn(true);

  alert("Login Successful");

  navigate("/");

} else {

  alert("Invalid Email or Password");

}


};

return ( 
<div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-white to-purple-700 "> <div className="bg-white/130 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-96 border border-gray-200">


    <h1 className="text-4xl font-bold text-center text-gray-800">
      Welcome Back 👋
    </h1>

    <p className="text-black text-1xl text-center mt-3">
      sign in to continue shopping
    </p>

    <form onSubmit={handleSubmit}>

      <div className="mt-7">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full p-2 rounded-xl border border-black outline-none focus:border-blue-500"
        />
      </div>

      <div className="mt-3 relative">
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="w-full p-2 rounded-xl border border-black outline-none focus:border-blue-500"
        />

        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 text-gray-500"
        >
          {showPassword ? "🙈" : "👁️"}
        </button>
      </div>

      <div className="flex items-center justify-between mt-4">

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input type="checkbox" />
          Remember Me
        </label>

        <a
          href="#"
          className="text-blue-600 text-sm hover:underline"
        >
          Forgot Password?
        </a>

      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl outline-none hover:bg-black transition duration-300 font-semibold"
      >
        Login
      </button>

    </form>

    <p className="text-center mt-5 text-gray-600">
      Don't have an account?{" "}

      <NavLink
        to="/register"
        className="text-blue-600 font-semibold cursor-pointer hover:underline"
      >
        Register
      </NavLink>

    </p>

  </div>
</div>


);
}

export default Login;
