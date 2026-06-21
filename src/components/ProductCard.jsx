import { useNavigate } from "react-router-dom";

function ProductCard({ product,addToCart, isLoggedIn }) 
{
  const navigate = useNavigate();
  const handleAddToCart = () => {

  if (!isLoggedIn) {
    alert("Please Login First");
    navigate("/login");
    return;
  }

  addToCart(product);
};
  return (
    <div className="w-50  border rounded-lg p-3 shadow-md">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-25 object-cover rounded"
      />

      <h2 className="text-xl font-bold mt-2">
        {product.title}
      </h2>

      <p className="text-lg font-semibold">
        ₹{product.price}
      </p>

      <p className="text-gray-500">
        {product.category}
      </p>

      <button className="bg-black text-white px-2 py-1 rounded mt-2"  onClick={handleAddToCart}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;