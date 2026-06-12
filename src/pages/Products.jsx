import products from "../data/products";
import ProductCard from "../components/ProductCard";

function Products() {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Products
      </h1>

      <div className="grid grid-cols-4 gap-x-1 gap-y-3">
        {products.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;