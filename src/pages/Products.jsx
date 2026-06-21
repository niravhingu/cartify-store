// import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState,useEffect } from "react";

function Products({ addToCart,isLoggedIn }) {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
  fetch("https://dummyjson.com/products?limit=194")
    .then((res) => res.json())
    .then((data) => {
      setProducts(data.products);
    })
    .catch((error) => {
      console.log(error);
    });
}, []);
console.log(products);

  const filteredProducts = products.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Products
      </h1>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-300 px-4 py-3 rounded-xl w-80 mb-8 outline-none focus:border-blue-500 shadow-sm"
      />
      <div className="grid grid-cols-4 gap-x-1 gap-y-3">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <ProductCard
              key={item.id}
              product={item}
              addToCart={addToCart}
              isLoggedIn={isLoggedIn}
            />
          ))
        ) : (
          <p className="text-red-500 text-lg">
            No Products Found 😔
          </p>
        )}
      </div>
    </div>
  );
}

export default Products;