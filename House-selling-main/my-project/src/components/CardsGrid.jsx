import { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { getListings } from "../utils/api"; // adjust path if needed

export default function CardsGrid() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const data = await getListings();
        console.log(data);

        setItems(data); // assuming API returns an array of listings
      } catch (err) {
        console.error(err);
        setError("Failed to load listings");
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p className="text-center py-12">Loading listings...</p>;
  if (error) return <p className="text-center py-12 text-red-500">{error}</p>;

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold mb-8">Featured Listings</h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {items.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
