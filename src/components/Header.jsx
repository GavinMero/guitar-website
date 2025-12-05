import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Left side: Logo */}
        <h1 className="logo">Guitar Academy</h1>

        {/* Right side: Hamburger + Nav */}
        <div className="nav-wrapper">

          {/* Hamburger button */}
          <button
            className="hamburger"
            style={{ backgroundColor: "hotpink", padding: "8px" }}
            onClick={() => setOpen(!open)}
          >
            <span style={{ backgroundColor: "white", width: "100%", height: "4px" }}></span>
            <span style={{ backgroundColor: "white", width: "100%", height: "4px" }}></span>
            <span style={{ backgroundColor: "white", width: "100%", height: "4px" }}></span>
          </button>

          {/* Nav links */}
          <nav className={`nav ${open ? "open" : ""}`}>
            <Link to="/" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/courses" onClick={() => setOpen(false)}>Courses</Link>
            <Link to="/lesson/1" onClick={() => setOpen(false)}>Lesson Viewer</Link>
          </nav>

        </div>

      </div>
    </header>
  );
}

export default Header;
