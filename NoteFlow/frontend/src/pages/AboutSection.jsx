// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";

// const AboutSection = () => {
//   const { isDark } = useContext(ThemeContext);
//   const themeClass = isDark
//     ? "bg-dark-purple text-light-purple"
//     : "bg-light-purple text-dark-purple";
//   const textMutedClass = isDark ? "text-light" : "text-muted";

//   return (
//     <section id="about" className={`py-5 ${themeClass}`}>
//       <div className="container">
//         <h2 className="text-center fw-bold mb-4">About NoteFlow</h2>
//         <div className="row align-items-center">
//           {/* Illustration */}
//           <div className="col-md-6 mb-4 mb-md-0">
//             <img
//               src="/assets/Taking notes-amico.png"
//               alt="NoteFlow Illustration"
//               className="img-fluid rounded shadow-sm"
//             />
//             {/* <p className={`mt-2 small ${textMutedClass}`}>
//               Illustration:{" "}
//               <a
//                 href="https://storyset.com/work"
//                 className="link-secondary"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 Work illustrations by Storyset
//               </a>
//             </p> */}
//           </div>

//           {/* Text Content */}
//           <div className="col-md-6">
//             <p className={`lead ${textMutedClass}`}>
//               <strong>NoteFlow</strong> is a modern, distraction-free notes app
//               designed for those who want to stay organized, productive, and in
//               control of their ideas.
//             </p>
//             <p className={textMutedClass}>
//               Whether you're a student, professional, or creative mind, NoteFlow
//               helps you capture thoughts, tag important content, search
//               instantly, and stay focused — all in one clean interface.
//             </p>
//             <p className={textMutedClass}>
//               Our mission is to simplify your digital life while respecting your
//               privacy. No unnecessary clutter, no ads. Just notes — done right.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;

import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-gradient py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">About NoteFlow</h2>
        <div className="row align-items-center">
          {/* Illustration */}
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              src="/assets/Taking notes-amico.png"
              alt="NoteFlow Illustration"
              className="img-fluid rounded shadow-sm"
            />
          </div>

          {/* Text Content */}
          <div className="col-md-6">
            <p className="lead">
              <strong>NoteFlow</strong> is a modern, distraction-free notes app
              designed for those who want to stay organized, productive, and in
              control of their ideas.
            </p>
            <p>
              Whether you're a student, professional, or creative mind, NoteFlow
              helps you capture thoughts, tag important content, search
              instantly, and stay focused — all in one clean interface.
            </p>
            <p>
              Our mission is to simplify your digital life while respecting your
              privacy. No unnecessary clutter, no ads. Just notes — done right.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
