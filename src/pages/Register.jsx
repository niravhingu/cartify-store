import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const handleSubmit = (e) => {
  e.preventDefault();

  // Empty fields
  if (name==="" || email ==="" || password==="" || confirmPassword==="" )
{
  alert("Please fill all fields")
  return;
}
  // Password length
 if (password.length < 8){

   alert("Password must be at least 8 characters");
   return;
  }

  // Password match
  if(password!==confirmPassword){
    alert("Password Does not Match")
    return;
  }
  const user = {
  name,
  email,
  password,
};

const users =
  JSON.parse(localStorage.getItem("users")) || [];

users.push(user);

localStorage.setItem(
  "users",
  JSON.stringify(users)
);
console.log(user)
localStorage.setItem(
  "user",
  JSON.stringify(user)
);

  alert("Sccessful Register");
  navigate("/login");
  
  // Success

}

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 via-white to-purple-700">

      <div className="bg-white/130 backdrop-blur-lg p-8 rounded-3xl shadow-2xl w-96 border border-gray-200 mt-10 mb-10">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          Create Account 🚀
        </h1>

        <p className="text-black text-center mt-3">
          Join Cartify and start shopping
        </p>
      <form onSubmit={handleSubmit}>

        <div className="mt-7">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
            className="w-full p-2 rounded-xl border border-black outline-none focus:border-blue-500"
          />
        </div>

        <div className="mt-3">
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

        <div className="mt-3 relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            className="w-full p-2 rounded-xl border border-black outline-none focus:border-blue-500"
            />

          <button
            type="button"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
            className="absolute right-3 top-2 text-gray-500"
          >
            {showConfirmPassword ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-black transition duration-300 font-semibold"
          >
          Create Account
        </button>
          </form>

        <p className="text-center mt-5 text-gray-600">
          Already have an account?{" "}
          <NavLink className="text-blue-600 font-semibold cursor-pointer hover:underline" to="/login">
            Login
          </NavLink>
        </p>

      </div>

    </div>
  );
}

export default Register;