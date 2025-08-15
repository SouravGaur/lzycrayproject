export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <h1 className="animate-fade-in">Find Your Dream Home</h1>
          <p className="animate-fade-in delay-1">
            Discover stunning flats and houses for sale across the city. Post
            your listing in minutes and connect with buyers instantly.
          </p>
          <a
            href="#listings"
            className="btn btn-gradient animate-fade-in delay-2"
          >
            🚀 Browse Listings
          </a>
        </div>
        <div className="hero-art" aria-hidden>
          <div className="blob"></div>
        </div>
      </div>
    </section>
  );
}
