import { NavLink } from "react-router-dom";

// Obere Navigationsleiste.
function Navbar() {
  return (
    <nav className="navbar">
      <span className="logo">🎮 Game Gallery</span>
      <div className="nav-links">
        <NavLink to="/">Galerie</NavLink>
        <NavLink to="/neu">Spiel hinzufügen</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
