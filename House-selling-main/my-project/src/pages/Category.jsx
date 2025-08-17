// src/pages/CategoryPage.jsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Fake data (replace with API later)
const allListings = {
  cars: [
    { id: 1, title: "Honda City", price: "₹6,50,000", img: "/images/car1.jpg" },
    {
      id: 2,
      title: "Hyundai i20",
      price: "₹5,20,000",
      img: "/images/car2.jpg",
    },
  ],
  bikes: [
    {
      id: 1,
      title: "Royal Enfield",
      price: "₹1,50,000",
      img: "/images/bike1.jpg",
    },
    { id: 2, title: "KTM Duke", price: "₹2,20,000", img: "/images/bike2.jpg" },
  ],
  Furniture: [
    {
      id: 1,
      title: "2 BHK in Delhi",
      price: "₹35,00,000",
      img: "/images/flat1.jpg",
    },
  ],
};

export default function Category() {
  const { category } = useParams(); // get URL param e.g. cars
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Fetch data dynamically (currently using dummy object)
    if (allListings[category]) {
      setItems(allListings[category]);
    } else {
      setItems([]);
    }
  }, [category]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {category} for Sale
      </h1>

      {items.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="border rounded-lg shadow-sm p-4 hover:shadow-md transition bg-white"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-3"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-gray-700">{item.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No {category} listings available.</p>
      )}
    </div>
  );
}
