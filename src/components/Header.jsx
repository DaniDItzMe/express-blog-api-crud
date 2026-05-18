import { NavLink } from "react-router";
import "./css/Header.css";
export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <h2 className="navbar-brand">Navbar</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/createPost">
                Crea un Post
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/cfds">
                Pricing
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
