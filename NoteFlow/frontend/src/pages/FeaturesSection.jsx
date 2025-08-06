// import React, { useContext } from "react";
// import { ThemeContext } from "../context/ThemeContext";
// import {
//   FaRegStickyNote,
//   FaTags,
//   FaSearch,
//   FaCloudUploadAlt,
//   FaShieldAlt,
//   FaFileExport,
// } from "react-icons/fa";

// const FeaturesSection = () => {
//   const { isDark } = useContext(ThemeContext);
//   const bgClass = isDark
//     ? "bg-dark-purple text-light-purple"
//     : "bg-light-purple text-dark-purple";
//   const cardText = isDark ? "text-light" : "text-muted";

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
//     <section id="features" className={`py-5 ${bgClass}`}>
//       <div className="container">
//         <h2 className="text-center fw-bold mb-4">Features</h2>
//         <div className="row">
//           {features.map((feature, index) => (
//             <div className="col-md-4 mb-4" key={index}>
//               <div
//                 className={`card h-100 shadow-sm border-0 ${
//                   isDark ? "bg-secondary text-white" : "bg-white"
//                 }`}
//               >
//                 <div className="card-body text-center">
//                   <div className="mb-3 text-success">{feature.icon}</div>
//                   <h5 className="card-title fw-semibold">{feature.title}</h5>
//                   <p className={`card-text ${cardText}`}>
//                     {feature.description}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import {
  FaRegStickyNote,
  FaTags,
  FaSearch,
  FaCloudUploadAlt,
  FaShieldAlt,
  FaFileExport,
} from "react-icons/fa";

const FeaturesSection = () => {
  const { isDark } = useContext(ThemeContext);
  const cardText = isDark ? "text-light" : "text-white"; // Better contrast
  const cardBg = isDark ? "bg-dark" : "bg-dark"; // Consistent dark cards

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
    <section id="features" className="section-gradient py-5">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Features</h2>
        <div className="row">
          {features.map((feature, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className={`card h-100 shadow border-0 ${cardBg}`}>
                <div className="card-body text-center">
                  <div className="mb-3 text-success">{feature.icon}</div>
                  <h5 className="card-title fw-semibold text-white">
                    {feature.title}
                  </h5>
                  <p className={`card-text ${cardText}`}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
