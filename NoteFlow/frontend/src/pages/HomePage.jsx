// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { ThemeContext } from "../context/ThemeContext";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import { toast } from "react-toastify";
// import {
//   FaRegStickyNote,
//   FaTags,
//   FaSearch,
//   FaCloudUploadAlt,
//   FaShieldAlt,
//   FaFileExport,
// } from "react-icons/fa";

// const HomePage = () => {
//   const navigate = useNavigate();
//   const isLoggedIn = !!localStorage.getItem("token");
//   const { isDark } = useContext(ThemeContext);
//   const cardText = isDark ? "text-light" : "text-white";
//   const cardBg = "bg-dark";

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     toast.success("✅ Message sent successfully!", {
//       theme: document.body.classList.contains("dark-theme") ? "dark" : "light",
//     });
//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };

//   const features = [
//     {
//       icon: <FaRegStickyNote size={32} />,
//       title: "Smart Note-Taking",
//       description:
//         "Create, edit, and manage all your notes in one place with a clean, intuitive interface.",
//     },
//     {
//       icon: <FaTags size={32} />,
//       title: "Tag Organization",
//       description:
//         "Organize your notes with custom tags and keep everything grouped and searchable.",
//     },
//     {
//       icon: <FaSearch size={32} />,
//       title: "Powerful Search",
//       description:
//         "Easily find any note by title, content, or tags using instant keyword search.",
//     },
//     {
//       icon: <FaCloudUploadAlt size={32} />,
//       title: "Auto Sync (Coming Soon)",
//       description:
//         "Keep your notes safe and in sync across all devices (future enhancement).",
//     },
//     {
//       icon: <FaShieldAlt size={32} />,
//       title: "Secure & Private",
//       description:
//         "Your notes are private and secure — only accessible by you.",
//     },
//     {
//       icon: <FaFileExport size={32} />,
//       title: "Export Notes",
//       description:
//         "Download or print your notes in clean, readable formats like PDF (coming soon).",
//     },
//   ];

//   return (
//     <div className="d-flex flex-column min-vh-100">
//       <Navbar />

//       {/* Hero Section */}
//       <section className="section-gradient">
//         <main
//           id="hero"
//           className="flex-grow-1 d-flex justify-content-center align-items-center text-center py-5"
//         >
//           <div className="container px-4">
//             <h1 className="mb-3 display-5 fw-semibold">
//               Welcome to NoteFlow 📝
//             </h1>
//             <p className="lead fw-light">
//               {isLoggedIn
//                 ? "Easily create and manage your personal notes anytime, anywhere."
//                 : "Organize your thoughts with ease. Login or Register to get started!"}
//             </p>

//             <div className="d-grid gap-3 mt-4 d-sm-flex justify-content-sm-center">
//               {!isLoggedIn ? (
//                 <>
//                   <button
//                     className="btn btn-success btn-lg px-4"
//                     onClick={() => navigate("/login")}
//                   >
//                     Login
//                   </button>
//                   <button
//                     className="btn btn-success btn-lg px-4"
//                     onClick={() => navigate("/register")}
//                   >
//                     Register
//                   </button>
//                 </>
//               ) : (
//                 <button
//                   className="btn btn-success btn-lg px-4"
//                   onClick={() => navigate("/notes")}
//                 >
//                   Go to Notes
//                 </button>
//               )}
//             </div>
//           </div>
//         </main>
//       </section>

//       {/* Features Section */}
//       <section id="features" className="section-gradient py-5">
//         <div className="container">
//           <h2 className="text-center fw-bold mb-4">Features</h2>
//           <div className="row">
//             {features.map((feature, index) => (
//               <div className="col-md-4 mb-4" key={index}>
//                 <div className={`card h-100 shadow border-0 ${cardBg}`}>
//                   <div className="card-body text-center">
//                     <div className="mb-3 text-success">{feature.icon}</div>
//                     <h5 className="card-title fw-semibold text-white">
//                       {feature.title}
//                     </h5>
//                     <p className={`card-text ${cardText}`}>
//                       {feature.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="section-gradient py-5">
//         <div className="container">
//           <h2 className="text-center fw-bold mb-4">About NoteFlow</h2>
//           <div className="row align-items-center">
//             <div className="col-md-6 mb-4 mb-md-0">
//               <img
//                 src="/assets/Taking notes-amico.png"
//                 alt="NoteFlow Illustration"
//                 className="img-fluid rounded "
//               />
//             </div>
//             <div className="col-md-6">
//               <p className="lead">
//                 <strong>NoteFlow</strong> is a modern, distraction-free notes
//                 app designed for those who want to stay organized, productive,
//                 and in control of their ideas.
//               </p>
//               <p>
//                 Whether you're a student, professional, or creative mind,
//                 NoteFlow helps you capture thoughts, tag important content,
//                 search instantly, and stay focused — all in one clean interface.
//               </p>
//               <p>
//                 Our mission is to simplify your digital life while respecting
//                 your privacy. No unnecessary clutter, no ads. Just notes — done
//                 right.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="section-gradient py-5">
//         <div className="container">
//           <h2 className="text-center fw-bold mb-4">Contact Us</h2>
//           <div className="row justify-content-center">
//             <div className="col-md-8">
//               {submitted && (
//                 <div className="alert alert-success text-center" role="alert">
//                   Thank you! Your message has been sent.
//                 </div>
//               )}

//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <label htmlFor="name" className="form-label fw-semibold">
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="email" className="form-label fw-semibold">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="mb-3">
//                   <label htmlFor="message" className="form-label fw-semibold">
//                     Message
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>

//                 <div className="text-center">
//                   <button type="submit" className="btn btn-success px-5">
//                     Send Message
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default HomePage;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import {
  FaRegStickyNote,
  FaTags,
  FaSearch,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaFileExport,
} from "react-icons/fa";

const HomePage = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");
  const { isDark } = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("✅ Message sent successfully!", {
      theme: document.body.classList.contains("dark-theme") ? "dark" : "light",
    });
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  const features = [
    {
      icon: <FaRegStickyNote size={32} />,
      title: "Smart Note-Taking",
      description:
        "Create, edit, and manage all your notes in one place with a clean, intuitive interface.",
    },
    {
      icon: <FaTags size={32} />,
      title: "Tag Organization",
      description:
        "Organize your notes with custom tags and keep everything grouped and searchable.",
    },
    {
      icon: <FaSearch size={32} />,
      title: "Powerful Search",
      description:
        "Easily find any note by title, content, or tags using instant keyword search.",
    },
    {
      icon: <FaCloudUploadAlt size={32} />,
      title: "Auto Sync (Coming Soon)",
      description:
        "Keep your notes safe and in sync across all devices (future enhancement).",
    },
    {
      icon: <FaShieldAlt size={32} />,
      title: "Secure & Private",
      description:
        "Your notes are private and secure — only accessible by you.",
    },
    {
      icon: <FaFileExport size={32} />,
      title: "Export Notes",
      description:
        "Download or print your notes in clean, readable formats like PDF (coming soon).",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Hero Section */}
      <section className="section-gradient mt-5 mb-5">
        <main
          id="hero"
          className="flex-grow-1 d-flex justify-content-center align-items-center text-center mb-5"
        >
          <div className="container px-4">
            <h1 className="mb-3 display-5 fw-semibold">
              Welcome to NoteFlow 📝
            </h1>
            <p className="lead fw-light">
              {isLoggedIn
                ? "Easily create and manage your personal notes anytime, anywhere."
                : "Organize your thoughts with ease. Login or Register to get started!"}
            </p>

            <div className=" gap-3 mt-4 d-sm-flex justify-content-sm-center text-center">
              {!isLoggedIn ? (
                <>
                  <button
                    className="btn btn-success btn-lg px-3 me-3"
                    onClick={() => navigate("/login")}
                  >
                    Login
                  </button>
                  <button
                    className="btn btn-success btn-lg px-3"
                    onClick={() => navigate("/register")}
                  >
                    Register
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-success btn-lg px-3"
                  onClick={() => navigate("/notes")}
                >
                  Go to Notes
                </button>
              )}
            </div>
          </div>
        </main>
      </section>

      {/* Features Section */}
      <section id="features" className="section-gradient px-3 pt-5 mb-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Features</h2>
          <div className="row">
            {features.map((feature, index) => (
              <div className="col-md-4 mb-4" key={index}>
                <div
                  className={`card h-100 shadow border-0 ${
                    isDark ? "card-dark" : "card-light"
                  }`}
                >
                  <div className="card-body text-center">
                    <div className="mb-3 text-success">{feature.icon}</div>
                    <h5 className="card-title fw-semibold">{feature.title}</h5>
                    <p className="card-text">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-gradient px-3 mb-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">About NoteFlow</h2>
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <img
                src="/assets/Taking notes-amico.png"
                alt="NoteFlow Illustration"
                className="img-fluid rounded "
              />
            </div>
            <div className="col-md-6">
              <p className="lead">
                <strong>NoteFlow</strong> is a modern, distraction-free notes
                app designed for those who want to stay organized, productive,
                and in control of their ideas.
              </p>
              <p>
                Whether you're a student, professional, or creative mind,
                NoteFlow helps you capture thoughts, tag important content,
                search instantly, and stay focused — all in one clean interface.
              </p>
              <p>
                Our mission is to simplify your digital life while respecting
                your privacy. No unnecessary clutter, no ads. Just notes — done
                right.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-gradient px-3 mb-5">
        <div className="container-fluid px-3 px-md-5">
          <h2 className="text-center fw-bold mb-4">Contact Us</h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              {submitted && (
                <div className="alert alert-success text-center" role="alert">
                  Thank you! Your message has been sent.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label fw-semibold">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control w-100"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control w-100"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label fw-semibold">
                    Message
                  </label>
                  <textarea
                    className="form-control w-100"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-success px-3">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
