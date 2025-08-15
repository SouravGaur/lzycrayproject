export default function ListingCard({ listing }) {
  const cover =
    (listing.images && listing.images[0]) ||
    listing.imageUrl ||
    "https://via.placeholder.com/600x400?text=No+Image";

  return (
    <article className="card">
      <div className="card-media">
        <img src={cover} alt={listing.title || "Property"} loading="lazy" />
        {listing.status && <span className="badge">{listing.status}</span>}
      </div>

      <div className="card-body">
        <h3 className="card-title">
          {listing.title || listing.adTitle || "Untitled Property"}
        </h3>
        <p className="card-meta">
          {listing.city && listing.state
            ? `${listing.city}, ${listing.state}`
            : listing.location || "Location not provided"}
        </p>

        <ul className="specs">
          {listing.bhk && <li>{listing.bhk} BHK</li>}
          {listing.bathrooms && <li>{listing.bathrooms} Bath</li>}
          {listing.superArea && <li>{listing.superArea} sqft</li>}
          {listing.furnishing && <li>{listing.furnishing}</li>}
        </ul>

        <div className="card-foot">
          <strong className="price">
            {listing.price != null
              ? `₹${Number(listing.price).toLocaleString()}`
              : "Price on request"}
          </strong>
        </div>
      </div>
    </article>
  );
}
