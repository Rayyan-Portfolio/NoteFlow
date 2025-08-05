// // /src/pages/HomePage.jsx

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
//       <h1 className="mb-4">Welcome to NoteFlow 📝</h1>
//       <p className="lead">
//         {isLoggedIn
//           ? "Create and manage your personal notes securely."
//           : "Login or register to start managing your notes."}
//       </p>

//       <div className="d-flex gap-3 mt-4 flex-wrap justify-content-center">
//         {!isLoggedIn ? (
//           <>
//             <button
//               className="btn btn-primary"
//               onClick={() => navigate("/login")}
//             >
//               Login
//             </button>
//             <button
//               className="btn btn-secondary"
//               onClick={() => navigate("/register")}
//             >
//               Register
//             </button>
//           </>
//         ) : (
//           <>
//             <button
//               className="btn btn-success"
//               onClick={() => navigate("/notes")}
//             >
//               Go to Notes
//             </button>
//             <button className="btn btn-danger" onClick={handleLogout}>
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// /src/pages/HomePage.jsx

// import React from "react";
// import { useNavigate } from "react-router-dom";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Navbar />

//       <div className="flex-grow-1 d-flex justify-content-center align-items-center text-center home-gradient">
//         <div className="p-4">
//           <h1 className="mb-3">Welcome to NoteFlow 📝</h1>
//           <p className="lead">
//             {isLoggedIn
//               ? "Easily create and manage your personal notes."
//               : "Organize your thoughts. Login or Register to get started!"}
//           </p>

//           <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
//             {!isLoggedIn ? (
//               <>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => navigate("/login")}
//                 >
//                   Login
//                 </button>
//                 <button
//                   className="btn btn-outline-secondary"
//                   onClick={() => navigate("/register")}
//                 >
//                   Register
//                 </button>
//               </>
//             ) : (
//               <button
//                 className="btn btn-success"
//                 onClick={() => navigate("/notes")}
//               >
//                 Go to Notes
//               </button>
//             )}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1 d-flex justify-content-center align-items-center text-center home-gradient">
        <div className="container px-4">
          <h1 className="mb-3 display-5 fw-semibold">Welcome to NoteFlow 📝</h1>
          <p className="lead fw-light">
            {isLoggedIn
              ? "Easily create and manage your personal notes anytime, anywhere."
              : "Organize your thoughts with ease. Login or Register to get started!"}
          </p>

          <div className="d-grid gap-3 mt-4 d-sm-flex justify-content-sm-center">
            {!isLoggedIn ? (
              <>
                <button
                  className="btn btn-success btn-lg px-4"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
                <button
                  className="btn btn-success btn-lg px-4"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
              </>
            ) : (
              <button
                className="btn btn-success btn-lg px-4"
                onClick={() => navigate("/notes")}
              >
                Go to Notes
              </button>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
