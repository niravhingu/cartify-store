import React from "react";

function Cart({ cartItems ,removeFromCart }) {
  

  return (
    <div className="max-w-5xl mx-auto px-5 py-10">

      <h1 className="text-center text-4xl font-bold mb-10">
        Shopping Cart 🛒
      </h1>

      <p className="text-center text-white mb-8 max-w-50 rounded-2xl bg-black">
        Total Items: {cartItems.length}
      </p>

      <div className="space-y-5">

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="bg-blue-200 shadow-lg rounded-2xl p-5 flex justify-between items-center hover:shadow-2xl duration-300"
          >

            {/* Left Side */}
            <div>
              <h2 className="text-2xl font-bold text-black">
                {item.title}
              </h2>

              <p className="text-gray-500 mt-1">
                {item.category}
              </p>

              <p className="text-green-600 font-bold text-xl mt-3">
                ₹{item.price}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                🚚 Fast Delivery Available
              </p>
            </div>

            {/* Right Side */}
            <div className="text-right">

              <div className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg font-semibold">
                In Stock
              </div>

              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 duration-300" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Cart;