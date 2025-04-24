// // Al principio del archivo
// "use client";

// import { useEffect, useState } from "react";

// export default function ScrollToTop() {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const toggleVisibility = () => {
//       if (window.scrollY > 380) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };

//     window.addEventListener("scroll", toggleVisibility);
//     return () => window.removeEventListener("scroll", toggleVisibility);
//   }, []);

//   const scrollToTop = () => {
//     if (typeof window !== "undefined") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   if (typeof window === "undefined") return null;

//   return (
//     <>
//       {visible && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
//         >
//           Volver arriba
//         </button>
//       )}
//     </>
//   );
// }
