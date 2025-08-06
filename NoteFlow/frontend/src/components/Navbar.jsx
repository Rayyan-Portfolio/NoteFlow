import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const { isDark, setIsDark } = useContext(ThemeContext);

  const themeClass = isDark ? "bg-dark navbar-dark text-white" : "bg-light";

  const [isCollapsed, setIsCollapsed] = useState(true);
  const toggleCollapse = () => setIsCollapsed((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsCollapsed(true);
    navigate("/login");
  };

  return (
    <nav
      className={`navbar navbar-expand-lg px-4 py-3 shadow-sm ${themeClass}`}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand fw-bold"
          to="/"
          onClick={() => setIsCollapsed(true)}
        >
          📝 NoteFlow
        </Link>

        {/* Hamburger toggle */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleCollapse}
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            !isCollapsed ? "show" : ""
          }`}
        >
          <div className="d-flex flex-column flex-lg-row align-items-lg-center gap-2 mt-3 mt-lg-0 ms-auto text-end">
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => {
                setIsDark((prev) => !prev);
                setIsCollapsed(true);
              }}
            >
              {isDark ? "☀ Light" : "🌙 Dark"}
            </button>

            {!isLoggedIn ? (
              <>
                <Link
                  className="btn btn-outline-primary btn-sm"
                  to="/login"
                  onClick={() => setIsCollapsed(true)}
                >
                  Login
                </Link>
                <Link
                  className="btn btn-outline-success btn-sm"
                  to="/register"
                  onClick={() => setIsCollapsed(true)}
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  className="btn btn-outline-success btn-sm"
                  to="/notes"
                  onClick={() => setIsCollapsed(true)}
                >
                  My Notes
                </Link>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
