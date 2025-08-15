import { useEffect, useState } from "react";
import ListingCard from "./ListingCard";
import { getListings } from "../utils/api";

export default function ListingsGrid() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    async function fetchListings() {
      try {
        const data = await getListings(); // call API
        setListings(data);
        console.log(data);
      } catch (error) {
        console.error(error);
        setErr(error.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    fetchListings();
  }, []);

  if (loading) return <p className="container">Loading listings…</p>;
  if (err) return <p className="container error">❌ {err}</p>;

  return (
    <section id="listings" className="container section">
      <div className="section-head">
        <h2>Available Properties</h2>
        <p>Latest houses and flats posted by owners.</p>
      </div>

      {listings.length === 0 ? (
        <p>No listings yet. Be the first to post!</p>
      ) : (
        <div className="listings-grid grid">
          {listings.map((listing) => (
            <ListingCard key={listing._id} listing={listing} />
          ))}
        </div>
      )}
    </section>
  );
}
