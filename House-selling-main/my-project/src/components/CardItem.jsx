import { Link } from "react-router-dom";

export default function CardItem({
  _id: id,
  title,
  price,
  description,
  images,
  city,
  bhk,
  carpetArea,
  subcategory,
}) {
  return (
    <Link to={`/${subcategory}/${id}`}>
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition border border-gray-200">
        <img
          src={
            images && images.length > 0
              ? images[0]
              : "https://via.placeholder.com/400x250"
          }
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-blue-600 font-semibold">
            ₹{price.toLocaleString()}
          </p>
          <p className="text-gray-600 text-sm mt-1">{description}</p>
          <p className="text-gray-500 text-xs mt-2">
            {bhk} | {carpetArea} sq ft | {city}
          </p>
        </div>
      </div>
    </Link>
  );
}
