import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useState } from "react";

function Products({addToCart}) {
  const [search, setSearch] = useState("");

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
    
      {search !== "" ? (
        <div className="grid grid-cols-4 gap-x-1 gap-y-3">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                 addToCart={addToCart}
              />
            ))
          ) : (
            <p className="text-red-500 text-lg">
              No Products Found 😔
            </p>
          )}
        </div>
      ) : (
        <p className="text-gray-500">
          Search for a product...
        </p>
      )}
    </div>
  );
}

export default Products;