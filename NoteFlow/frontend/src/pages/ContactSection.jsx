// import React, { useState, useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import { toast } from "react-toastify";

// const ContactSection = () => {
//   const { isDark } = useContext(ThemeContext);

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
//     console.log("Form submitted:", formData);
//     toast.success("✅ Message sent successfully!", {
//       theme: isDark ? "dark" : "light",
//     });

//     setSubmitted(true);
//     setFormData({ name: "", email: "", message: "" });
//   };
//   const bgClass = isDark
//     ? "bg-dark-purple text-light-purple"
//     : "bg-light-purple text-dark-purple";
//   const mutedClass = isDark ? "text-light" : "text-muted";

//   return (
//     <section id="contact" className={`py-5 ${bgClass}`}>
//       <div className="container">
//         <h2 className="text-center fw-bold mb-4">Contact Us</h2>
//         <div className="row justify-content-center">
//           <div className="col-md-8">
//             {submitted && (
//               <div
//                 className={`alert text-center ${
//                   isDark ? "alert-success" : "alert-success"
//                 }`}
//                 role="alert"
//               >
//                 Thank you! Your message has been sent.
//               </div>
//             )}

//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label
//                   htmlFor="name"
//                   className={`form-label fw-semibold ${mutedClass}`}
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   className="form-control"
//                   id="name"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label
//                   htmlFor="email"
//                   className={`form-label fw-semibold ${mutedClass}`}
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   className="form-control"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <div className="mb-3">
//                 <label
//                   htmlFor="message"
//                   className={`form-label fw-semibold ${mutedClass}`}
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   className="form-control"
//                   id="message"
//                   name="message"
//                   rows="5"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                 ></textarea>
//               </div>

//               <div className="text-center">
//                 <button type="submit" className="btn btn-success px-5">
//                   Send Message
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection;

import React, { useState } from "react";
import { toast } from "react-toastify";

const ContactSection = () => {
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

  return (
    <section id="contact" className="section-gradient py-5">
      <div className="container">
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
                  className="form-control"
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
                  className="form-control"
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
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-success px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
