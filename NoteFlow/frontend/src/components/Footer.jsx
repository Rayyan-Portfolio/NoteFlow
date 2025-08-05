// // /src/components/Footer.jsx

// import React from "react";

// const Footer = () => {
//   const isDark = localStorage.getItem("theme") === "dark";
//   const themeClass = isDark ? "bg-dark text-white border-top" : "bg-light";

//   return (
//     <footer className={`text-center py-3 mt-auto ${themeClass}`}>
//       <small>
//         © {new Date().getFullYear()} NoteFlow — Built by Ahmad Rayyan 💻
//       </small>
//     </footer>
//   );
// };

// export default Footer;

// /src/components/Footer.jsx

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);
  const themeClass = isDark ? "bg-dark text-white border-top" : "bg-light";

  return (
    <footer className={`text-center py-3 mt-auto ${themeClass}`}>
      <small>
        © {new Date().getFullYear()} NoteFlow — Built by Ahmad Rayyan 💻
      </small>
    </footer>
  );
};

export default Footer;
