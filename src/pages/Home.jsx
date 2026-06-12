import { Link } from "react-router-dom";
import categories from "../data/category";
import CategoryCard from "../components/CategoryCard.jsx";
import products from "../data/products";
import ProductCard from "../components/ProductCard.jsx";
import features from "../data/features";
import FeatureCard from "../components/FeatureCard";

function Home() {
  return (
    <div>

      <section  className="flex items-center justify-between px-16 py-20">

        {/* Left Side */}
        <div>
          <p className="text-blue-500 font-semibold mb-3">
  ✨ New Collection 2026
</p>

          <h1 className="text-5xl font-bold">
          Shop Smarter,
            <br />
Live Better With Cartify
          </h1>

          <p className="text-gray-600 text-lg mt-4">
            Discover premium products at unbeatable prices.
          </p>

          <div className="flex gap-6 mt-6">
            <Link to="/products" className="hover:text-gray-300 transition duration-300">
              Shop Now
            </Link>

            <button className="bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-700 transition duration-300">
              Explore
            </button>
          </div>

        </div>

        {/* Right Side */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="hero"
            className="w-125 rounded-xl"
          />

        </div>
        

      </section>

      <p className="text-center text-black font-bold text-3xl">Trusted by Customers</p>
    <div className="flex gap-9 mt-12 mx-auto justify-center">

  <div className="bg-black shadow-lg rounded-2xl p-5 w-36 text-center hover:scale-105 duration-300">
    <h2 className="text-3xl font-bold text-blue-500">
      50K+
    </h2>
    <p className="text-white mt-2">
      Customers
    </p>
  </div>

  <div className="bg-black shadow-lg rounded-2xl p-5 w-36 text-center hover:scale-105 duration-300">
    <h2 className="text-3xl font-bold text-blue-500">
      2K+
    </h2>
    <p className="text-white mt-2">
      Products
    </p>
  </div>

  <div className="bg-black shadow-lg rounded-2xl p-5 w-36 text-center hover:scale-105 duration-300">
    <h2 className="text-3xl font-bold text-blue-500">
      4.9★
    </h2>
    <p className="text-white mt-2">
      Rating
    </p>
  </div>

  <div className="bg-black shadow-lg rounded-2xl p-5 w-36 text-center hover:scale-105 duration-300">
    <h2 className="text-3xl font-bold text-blue-500">
      99%
    </h2>
    <p className="text-white mt-2">
      Satisfaction
    </p>
</div> 

</div>
<h3 className="text-center text-black font-bold text-3xl mt-12">Why Thousands Trust Cartify</h3>
    <section className="flex items-center justify-between px-16 py-24 gap-12">
      {/* left */}
      <div className="w-1/2">
  <img
    src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
    alt="about"
    className="rounded-2xl"
  />
</div>
{/* right */}
 <div className="w-1/2">

  <p className="text-blue-500 font-semibold">
    About Cartify
  </p>

  <h2 className="text-4xl font-bold mt-3">
    Why Thousands Trust Cartify
  </h2>

  <p className="text-gray-600 mt-5 leading-6">
    Cartify is a modern e-commerce platform built to provide
    premium products, secure shopping, and fast delivery.
    We focus on quality, affordability, and customer satisfaction
    for every customer.
  </p>

  <div className="mt-8 space-y-4 flex  text-white gap-2">

    <p className="bg-black p-2 rounded">✅Premium Quality Products</p>

    <p className="bg-black p-2 rounded">🚚 Fast & Reliable Delivery</p>

    <p className="bg-black p-2 rounded">🔒Secure Payment Methods</p>

    <p className="bg-black p-2 rounded mb-4">🎧24/7 Customer Support</p>

  </div>

</div>

</section>


{/* Categories Section */}

<h2 className="text-center text-4xl font-bold mt-5 mb-10 ">
  Shop By Category
</h2>

<div className="grid grid-cols-3 gap-6 px-5">
  {categories.map((item) => (
    <CategoryCard
      key={item.id}
      category={item}
    />
  ))}

</div>
  <div className="text-center mt-20 mb-10">
  <h2 className="text-4xl font-bold">
    Featured Products
  </h2>

  <p className="text-gray-600 mt-3">
    Explore our most popular products
  </p>
</div>
<div className="grid grid-cols-4 gap-6 px-16">
  {products.slice(0, 4).map((item) => (
    <ProductCard
      key={item.id}
      product={item}
    />
  ))}
</div>
<div className="text-center mt-10">
  <Link
    to="/products"
    className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800"
  >
    View All Products
  </Link>
</div>

<h2 className="text-center text-4xl font-bold mt-20 mb-10">
  Why Choose Us
</h2>
<div className="grid grid-cols-2 gap-6 px-5">
  {features.map((item) => (
    <FeatureCard
      key={item.id}
      feature={item}
    />
  ))}
</div>
</div>
)
};

export default Home;