function FeatureCard({ feature }) {
  return (
    <div className="bg-emerald-100 shadow-lg rounded-2xl p-6 text-center hover:scale-105 duration-300">

      <h3 className="text-xl font-bold mb-3 ">
        {feature.title}
      </h3>

      <p className="text-gray-600">
        {feature.description}
      </p>

    </div>
  );
}

export default FeatureCard;