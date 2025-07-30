import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // đường dẫn đúng của bạn

function Product(props) {
  const { title, price, description, image, id } = props;
  // Thêm
  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/product/${id}`);
  // };
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // ⛔ Ngăn không bị click lan sang phần navigate
    addToCart({ id, image, title, price });
  };

  return (
    <div className="col">
      <div className="card shadow-sm d-flex flex-column product-card">
        <img
          src={image}
          alt={title}
          style={{ height: "200px", objectFit: "contain", cursor: "pointer" }}
          onClick={() => navigate(`/product/${id}`)} // 👈 Di chuyển logic vào đây
        />
        <div className="card-body d-flex flex-column">
          <div className="product-description">
            <h6 className="card-title">{title}</h6>
            <p className="card-text ">{description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 mb-0 ms-1">${price}</span>
          <button className="btn btn-info me-1" onClick={handleAddToCart}>
            <i className="bi bi-cart-plus" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
