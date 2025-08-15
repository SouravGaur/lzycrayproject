import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  return (
    <header style={{ background: "#fff", borderBottom: "1px solid #eee" }}>
      <div className="container header">
        <Link to="/" className="brand">
          🏠 RealEstate
        </Link>

        <nav className="nav">
          <Link className={pathname === "/" ? "active" : ""} to="/">
            Home
          </Link>
          <Link className={pathname === "/upload" ? "active" : ""} to="/upload">
            Post Your Property
          </Link>
        </nav>
      </div>
    </header>
  );
}
