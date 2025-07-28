import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // thêm dòng này ở đầu
import { useCart } from "../context/CartContext";
import Image01 from "../../assets/Image01.jpg";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./ReactHeaderTemplates.css";

const ReactHeaderTemplates = () => {
  const navigate = useNavigate(); // thêm dòng này trong component
  const { openCart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);

  const handleCategoryClick = (value) => {
    if (!value) {
      navigate("/"); // 👈 nếu là All Products thì quay về trang gốc
    } else {
      navigate(`/?category=${encodeURIComponent(value)}`);
    }
    // navigate(`/?category=${encodeURIComponent(value)}`);
  };
  // ***** Đã phân trang *****
  const menuCategories = [
    { label: "All Products", value: "" }, // 👈 giá trị rỗng để quay về trang chủ
    { label: "Men", value: "men's clothing" },
    { label: "Women", value: "women's clothing" },
    { label: "Jewelry", value: "jewelery" },
    { label: "Electronics", value: "electronics" },
  ];
  // ***** Chưa phân trang *****
  // const menuCategories = ["Men", "Jewelry", "Electronics", "Women"];

  return (
    <header className="bg-white shadow sticky-top z-50">
      <nav className="container-fluid py-3">
        <div className="container d-flex align-items-center justify-content-between">
          {/* Logo và tên website */}
          <div
            className="d-flex align-items-center gap-3"
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")} // 👈 chuyển về trang chủ
          >
            <img
              src={Image01}
              alt="Logo"
              className="rounded-circle object-fit-cover"
              style={{ height: "48px", width: "48px" }}
            />
            <span className="fs-4 fw-bold text-warning hover-scale">MyWeb</span>
          </div>

          {/* Menu cho màn hình lớn (desktop) */}
          <div className="d-none d-lg-flex gap-4">
            {/* ***** Đã phân trang ***** */}
            {menuCategories.map((category) => (
              <button
                key={category.value}
                className="btn btn-link text-secondary btn-press hover-orange"
                onClick={() => handleCategoryClick(category.value)}
              >
                {category.label}
              </button>
            ))}
            {/* ***** Chưa phân trang ***** */}
            {/* {menuCategories.map((category) => (
              // <button
              //   key={category}
              //   className="btn btn-link text-secondary btn-press hover-orange"
              // >
              //   {category}
              // </button>
            ))} */}
          </div>

          {/* Các icon bên phải: tìm kiếm, giỏ hàng, người dùng (desktop) */}
          <div className="d-none d-lg-flex align-items-center gap-3">
            {/* Ô tìm kiếm */}
            <div className="position-relative">
              <input
                type="text"
                placeholder="Search dishes..."
                className="form-control ps-5 input-focus-outline"
                style={{ width: "240px", borderRadius: "999px" }}
              />
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
            </div>

            {/* Icon giỏ hàng trên desktop – có badge đếm sản phẩm */}
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

            {/* Icon người dùng trên desktop */}
            <div style={{ cursor: "pointer" }}>
              <FaUser className="fs-5 text-secondary hover-orange" />
            </div>
          </div>

          {/* Các icon đơn giản cho mobile (ẩn menu chi tiết) */}
          <div className="d-flex d-lg-none align-items-center gap-3 ms-auto">
            {/* Giỏ hàng trên mobile – thêm onClick nếu muốn mở giỏ */}
            <div onClick={openCart} style={{ cursor: "pointer" }}>
              <FaShoppingCart className="fs-5 text-secondary hover-orange" />
            </div>

            {/* Người dùng trên mobile – chưa gắn sự kiện */}
            <div style={{ cursor: "pointer" }}>
              <FaUser className="fs-5 text-secondary hover-orange" />
            </div>
          </div>

          {/* Nút toggle menu (bars hoặc close) cho mobile */}
          <button
            className="d-lg-none btn fs-4 ms-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu thả xuống trên mobile nếu được bật */}
        {isMenuOpen && (
          <div className="d-lg-none mt-3">
            {/* ***** Đã phân trang ***** */}
            {menuCategories.map((category) => (
              <button
                key={category.value}
                className="btn w-100 text-start mb-2 bg-hover-orange"
                onClick={() => {
                  handleCategoryClick(category.value);
                  setIsMenuOpen(false);
                }}
              >
                {category.label}
              </button>
            ))}
            {/* ***** Chưa phân trang ***** */}
            {/* {menuCategories.map((category) => (
              // <button
              //   key={category}
              //   className="btn w-100 text-start mb-2 bg-hover-orange"
              // >
              //   {category}
              // </button>
            ))} */}
          </div>
        )}
      </nav>
    </header>
  );
};

export default ReactHeaderTemplates;
