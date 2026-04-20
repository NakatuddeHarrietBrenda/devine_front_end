import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <header className="header">
      
      {/* LOGO */}
      <div className="logo">
        Devine <span>Tile Fixers</span>
      </div>

      {/* NAV */}
      <nav className={menuOpen ? "nav open" : "nav"}>
        <Link className={isActive("/")} to="/">Home</Link>
        <Link className={isActive("/about")} to="/about">About</Link>
        <Link className={isActive("/services")} to="/services">Services</Link>
        <Link className={isActive("/projects")} to="/projects">Projects</Link>
        <Link className={isActive("/contact")} to="/contact">Contact</Link>
      </nav>

      {/* RIGHT SIDE */}
      <div className="header-right">
        <div className="phone">
          <FaPhoneAlt /> +256 700 000000
        </div>

        {/* MOBILE MENU */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </div>

    </header>
  );
}

export default Header;