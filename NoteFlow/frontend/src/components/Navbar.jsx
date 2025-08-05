// // // /src/components/Navbar.jsx

// // import React, { useEffect, useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";

// // const Navbar = () => {
// //   const [isDark, setIsDark] = useState(() => {
// //     return localStorage.getItem("theme") === "dark";
// //   });

// //   const navigate = useNavigate();
// //   const isLoggedIn = !!localStorage.getItem("token");

// //   // Apply theme on load and when toggled
// //   useEffect(() => {
// //     const root = document.documentElement;
// //     if (isDark) {
// //       root.classList.add("dark-theme");
// //       localStorage.setItem("theme", "dark");
// //     } else {
// //       root.classList.remove("dark-theme");
// //       localStorage.setItem("theme", "light");
// //     }
// //   }, [isDark]);

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <nav className="navbar navbar-expand-lg bg-body-tertiary px-4 py-3 shadow-sm">
// //       <div className="container-fluid">
// //         <Link className="navbar-brand fw-bold" to="/">
// //           📝 NoteFlow
// //         </Link>

// //         <div className="d-flex align-items-center gap-3 ms-auto">
// //           {/* Theme toggle */}
// //           <button
// //             className="btn btn-outline-secondary btn-sm"
// //             onClick={() => setIsDark((prev) => !prev)}
// //           >
// //             {isDark ? "☀ Light" : "🌙 Dark"}
// //           </button>

// //           {!isLoggedIn ? (
// //             <>
// //               <Link className="btn btn-outline-primary btn-sm" to="/login">
// //                 Login
// //               </Link>
// //               <Link className="btn btn-outline-success btn-sm" to="/register">
// //                 Register
// //               </Link>
// //             </>
// //           ) : (
// //             <>
// //               <Link className="btn btn-outline-success btn-sm" to="/notes">
// //                 My Notes
// //               </Link>
// //               <button
// //                 className="btn btn-outline-danger btn-sm"
// //                 onClick={handleLogout}
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // /src/components/Navbar.jsx

// // import React, { useContext } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import { ThemeContext } from "../context/ThemeContext";

// // const Navbar = () => {
// //   const navigate = useNavigate();
// //   const isLoggedIn = !!localStorage.getItem("token");

// //   const { isDark, setIsDark } = useContext(ThemeContext);
// //   const themeClass = isDark ? "bg-dark navbar-dark text-white" : "bg-light";

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/login");
// //   };

// //   return (
// //     <nav
// //       className={`navbar navbar-expand-lg px-4 py-3 shadow-sm ${themeClass}`}
// //     >
// //       <div className="container-fluid">
// //         <Link className="navbar-brand fw-bold" to="/">
// //           📝 NoteFlow
// //         </Link>

// //         <div className="d-flex align-items-center gap-3 ms-auto">
// //           {/* Theme toggle */}
// //           <button
// //             className="btn btn-outline-secondary btn-sm"
// //             onClick={() => setIsDark((prev) => !prev)}
// //           >
// //             {isDark ? "☀ Light" : "🌙 Dark"}
// //           </button>

// //           {!isLoggedIn ? (
// //             <>
// //               <Link className="btn btn-outline-primary btn-sm" to="/login">
// //                 Login
// //               </Link>
// //               <Link className="btn btn-outline-success btn-sm" to="/register">
// //                 Register
// //               </Link>
// //             </>
// //           ) : (
// //             <>
// //               <Link className="btn btn-outline-success btn-sm" to="/notes">
// //                 My Notes
// //               </Link>
// //               <button
// //                 className="btn btn-outline-danger btn-sm"
// //                 onClick={handleLogout}
// //               >
// //                 Logout
// //               </button>
// //             </>
// //           )}
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// // /src/components/Navbar.jsx

// import React, { useContext, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { ThemeContext } from "../context/ThemeContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");
//   const { isDark, setIsDark } = useContext(ThemeContext);
//   const themeClass = isDark ? "bg-dark navbar-dark text-white" : "bg-light";

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   // Control collapse on small screens
//   const [isCollapsed, setIsCollapsed] = useState(true);

//   const toggleCollapse = () => {
//     setIsCollapsed((prev) => !prev);
//   };

//   return (
//     <nav
//       className={`navbar navbar-expand-lg px-4 py-3 shadow-sm ${themeClass}`}
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand fw-bold" to="/">
//           📝 NoteFlow
//         </Link>

//         {/* Toggler Button for Mobile */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={toggleCollapse}
//           aria-expanded={!isCollapsed}
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible Nav Items */}
//         <div
//           className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
//         >
//           <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 mt-3 mt-lg-0">
//             <button
//               className="btn btn-outline-secondary btn-sm"
//               onClick={() => setIsDark((prev) => !prev)}
//             >
//               {isDark ? "☀ Light" : "🌙 Dark"}
//             </button>

//             {!isLoggedIn ? (
//               <>
//                 <Link className="btn btn-outline-primary btn-sm" to="/login">
//                   Login
//                 </Link>
//                 <Link className="btn btn-outline-success btn-sm" to="/register">
//                   Register
//                 </Link>
//               </>
//             ) : (
//               <>
//                 <Link className="btn btn-outline-success btn-sm" to="/notes">
//                   My Notes
//                 </Link>
//                 <button
//                   className="btn btn-outline-danger btn-sm"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// /src/components/Navbar.jsx

import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const { isDark, setIsDark } = useContext(ThemeContext);

  const themeClass = isDark ? "bg-dark navbar-dark text-white" : "bg-light";

  // Collapse control
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

        {/* Collapsible content */}
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
        >
          <div className="ms-auto d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-2 mt-3 mt-lg-0">
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
