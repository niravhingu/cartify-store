function CategoryCard({ category }) {
  return (
    <div className="relative overflow-hidden rounded-2xl group cursor-pointer">

      <img
        src={category.image}
        alt={category.name}
        className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition duration-500">
      </div>

      <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
        {category.name}
      </h3>
        
    </div>
  );
}

export default CategoryCard;