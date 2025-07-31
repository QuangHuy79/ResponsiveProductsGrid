// import React from "react";
// import ItemDetails from "./ItemDetails";
// import CardDetails from "../CardDetails/CardDetails";
// import { formikProps } from "../CardDetails/FormikProps";
// import { useCart } from "../context/CartContext";
// import { FaTimes } from "react-icons/fa";
// import "./ShoppingCartTemplate.css";
// import { useNavigate } from "react-router-dom"; // ⬅️ thêm dòng này

// function ShoppingCartTemplate() {
//   const { isCartOpen, closeCart } = useCart();
//   const navigate = useNavigate(); // ⬅️ khởi tạo hàm chuyển hướng

//   if (!isCartOpen) return null;

//   return (
//     <div
//       className="shopping-cart-overlay shopping-cart-backdrop"
//       onClick={closeCart} // Khi click ra ngoài sẽ đóng cart
//     >
//       <div
//         className="shopping-cart-content bg-white shadow p-4"
//         onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click lan ra ngoài
//       >
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4 className="mb-0">🛒 Giỏ hàng</h4>
//           <button className="btn btn-sm btn-danger" onClick={closeCart}>
//             <FaTimes />
//           </button>
//         </div>

//         <section className="h-100 h-custom">
//           <div className="container py-3">
//             <div className="row justify-content-center align-items-center">
//               <div className="col">
//                 <div className="card">
//                   <div className="card-body">
//                     <div className="row">
//                       <div className="col-lg-7">
//                         <div className="text-start mb-3">
//                           <button
//                             className="btn btn-info btn-lg"
//                             onClick={() => {
//                               closeCart();
//                               navigate("/"); // ⬅️ chuyển về trang chủ
//                             }}
//                           >
//                             <i className="fas fa-long-arrow-alt-left me-2" />
//                             <strong>Continue Shopping</strong>
//                           </button>
//                         </div>
//                         <hr />
//                         <div className="d-flex justify-content-between align-items-center mb-4">
//                           <div>
//                             <h4>Shopping cart</h4>
//                             <p className="mb-0">
//                               You have 4 items in your cart
//                             </p>
//                           </div>
//                           <div>
//                             <p className="mb-0">
//                               <span className="text-muted">Sort by:</span>{" "}
//                               <a href="#!" className="text-body">
//                                 price <i className="fas fa-angle-down" />
//                               </a>
//                             </p>
//                           </div>
//                         </div>
//                         <ItemDetails />
//                       </div>
//                       <div className="col-lg-5">
//                         <CardDetails {...formikProps} />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// }

// export default ShoppingCartTemplate;

// ***** Thêm dữ liệu động từ Api *****

import React from "react";
import ItemDetails from "./ItemDetails";
import CardDetails from "../CardDetails/CardDetails";
import { formikProps } from "../CardDetails/FormikProps";
import { useCart } from "../context/CartContext";
import { FaTimes } from "react-icons/fa";
import "./ShoppingCartTemplate.css";
import { useNavigate } from "react-router-dom"; // ⬅️ thêm dòng này

function ShoppingCartTemplate() {
  const navigate = useNavigate(); // ⬅️ khởi tạo hàm chuyển hướng
  const { isCartOpen, closeCart, cartItems } = useCart(); // 🟢 lấy thêm cartItems
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  if (!isCartOpen) return null;

  return (
    <div
      className="shopping-cart-overlay shopping-cart-backdrop"
      onClick={closeCart} // Khi click ra ngoài sẽ đóng cart
    >
      <div
        className="shopping-cart-content bg-white shadow p-4"
        onClick={(e) => e.stopPropagation()} // Ngăn sự kiện click lan ra ngoài
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4 className="mb-0">🛒 Giỏ hàng</h4>
          <button className="btn btn-sm btn-danger" onClick={closeCart}>
            <FaTimes />
          </button>
        </div>

        <section className="h-100 h-custom">
          <div className="container py-3">
            <div className="row justify-content-center align-items-center">
              <div className="col">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-7">
                        <div className="text-start mb-3">
                          <button
                            className="btn btn-info btn-lg"
                            onClick={() => {
                              closeCart();
                              navigate("/"); // ⬅️ chuyển về trang chủ
                            }}
                          >
                            <i className="fas fa-long-arrow-alt-left me-2" />
                            <strong>Continue Shopping</strong>
                          </button>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center mb-4">
                          <div>
                            <h4>Shopping cart</h4>
                            <h5 className="mb-0">
                              You have <strong>{totalItems}</strong> item
                              {totalItems !== 1 ? "s" : ""} in your cart
                            </h5>
                          </div>
                          <div>
                            <p className="mb-0">
                              <span className="text-muted">Sort by:</span>{" "}
                              <a href="#!" className="text-body">
                                price <i className="fas fa-angle-down" />
                              </a>
                            </p>
                          </div>
                        </div>
                        {/* <ItemDetails /> */}
                        {/* 🟢 Duyệt danh sách sản phẩm trong giỏ */}
                        {cartItems.length === 0 ? (
                          <p className="text-muted">Your cart is empty.</p>
                        ) : (
                          cartItems.map((item, index) => (
                            <ItemDetails key={index} item={item} />
                          ))
                        )}
                      </div>
                      <div className="col-lg-5">
                        <CardDetails {...formikProps} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ShoppingCartTemplate;
