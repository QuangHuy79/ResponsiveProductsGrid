// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { useCart } from "../context/CartContext";
// import {
//   FaSearch,
//   FaShoppingCart,
//   FaUser,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import "./ReactHeaderTemplates.css";

// const ReactHeaderTemplates = () => {
//   const { openCart } = useCart();
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(3);

//   const menuCategories = [
//     "Appetizers",
//     "Main Courses",
//     "Desserts",
//     "Beverages",
//   ];

//   return (
//     <header className="bg-white shadow sticky-top z-50">
//       <nav className="container-fluid py-3">
//         <div className="container d-flex align-items-center justify-content-between">
//           {/* Logo */}
//           <div className="d-flex align-items-center gap-3">
//             <img
//               src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
//               alt="Restaurant Logo"
//               className="rounded-circle object-fit-cover"
//               style={{ height: "48px", width: "48px" }}
//             />
//             <span className="fs-4 fw-bold text-warning hover-scale">
//               FoodieSpot
//             </span>
//           </div>

//           {/* Menu categories (Desktop only) */}
//           <div className="d-none d-lg-flex gap-4">
//             {menuCategories.map((category) => (
//               <button
//                 key={category}
//                 className="btn btn-link text-secondary btn-press hover-orange "
//               >
//                 {category}
//               </button>
//             ))}
//           </div>

//           {/* Desktop: Search + Cart + User */}
//           <div className="d-none d-lg-flex align-items-center gap-3">
//             <div className="position-relative">
//               <input
//                 type="text"
//                 placeholder="Search dishes..."
//                 className="form-control ps-5 input-focus-outline"
//                 style={{ width: "240px", borderRadius: "999px" }}
//               />
//               <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
//             </div>

//             <div
//               className="position-relative "
//               onClick={openCart}
//               style={{ cursor: "pointer" }}
//             >
//               <FaShoppingCart className="fs-5 text-secondary hover-orange" />
//               <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white badge-pulse">
//                 {cartCount}
//               </span>
//             </div>

//             {/* <Link to="/ShoppingCartTemplate">
//               <div className="position-relative " style={{ cursor: "pointer" }}>
//                 <FaShoppingCart className="fs-5 text-secondary hover-orange" />
//                 <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white badge-pulse">
//                   {cartCount}
//                 </span>
//               </div>
//             </Link> */}

//             <div>
//               <FaUser
//                 className="fs-5 text-secondary hover-orange"
//                 style={{ cursor: "pointer" }}
//               />
//             </div>
//           </div>

//           {/* Mobile: Cart + User */}
//           <div className="d-flex d-lg-none align-items-center gap-3 ms-auto">
//             <FaShoppingCart className="fs-5 text-secondary hover-orange" />
//             <FaUser className="fs-5 text-secondary hover-orange" />
//           </div>

//           {/* Mobile toggle */}
//           <button
//             className="d-lg-none btn fs-4 ms-2"
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             {isMenuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//         </div>

//         {/* Mobile menu */}
//         {isMenuOpen && (
//           <div className="d-lg-none mt-3">
//             {menuCategories.map((category) => (
//               <button
//                 key={category}
//                 className="btn w-100 text-start mb-2 bg-hover-orange"
//               >
//                 {category}
//               </button>
//             ))}

//             <div className="position-relative">
//               <input
//                 type="text"
//                 placeholder="Search dishes..."
//                 className="form-control ps-5 input-focus-outline"
//                 style={{ borderRadius: "999px" }}
//               />
//               <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
//             </div>
//           </div>
//         )}
//       </nav>
//     </header>
//   );
// };

// export default ReactHeaderTemplates;

import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./ReactHeaderTemplates.css";

const ReactHeaderTemplates = () => {
  const { openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const menuCategories = [
    "Appetizers",
    "Main Courses",
    "Desserts",
    "Beverages",
  ];

  return (
    <header className="bg-white shadow sticky-top z-50">
      <nav className="container-fluid py-3">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5"
              alt="Restaurant Logo"
              className="rounded-circle object-fit-cover"
              style={{ height: "48px", width: "48px" }}
            />
            <span className="fs-4 fw-bold text-warning hover-scale">
              FoodieSpot
            </span>
          </div>

          <div className="d-none d-lg-flex gap-4">
            {menuCategories.map((category) => (
              <button
                key={category}
                className="btn btn-link text-secondary btn-press hover-orange"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="d-none d-lg-flex align-items-center gap-3">
            <div className="position-relative">
              <input
                type="text"
                placeholder="Search dishes..."
                className="form-control ps-5 input-focus-outline"
                style={{ width: "240px", borderRadius: "999px" }}
              />
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            </div>

            <div
              onClick={openCart}
              className="position-relative"
              style={{ cursor: "pointer" }}
            >
              <FaShoppingCart className="fs-5 text-secondary hover-orange" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-white badge-pulse">
                {cartCount}
              </span>
            </div>

            <div>
              <FaUser
                className="fs-5 text-secondary hover-orange"
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>

          <div className="d-flex d-lg-none align-items-center gap-3 ms-auto">
            <FaShoppingCart className="fs-5 text-secondary hover-orange" />
            <FaUser className="fs-5 text-secondary hover-orange" />
          </div>

          <button
            className="d-lg-none btn fs-4 ms-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="d-lg-none mt-3">
            {menuCategories.map((category) => (
              <button
                key={category}
                className="btn w-100 text-start mb-2 bg-hover-orange"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default ReactHeaderTemplates;
