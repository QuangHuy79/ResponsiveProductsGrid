import React from "react";

function Product(props) {
  const { title, price, description, image } = props;
  return (
    <div className="col">
      <div className="card shadow-sm d-flex flex-column product-card">
        <img
          src={image}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "contain" }}
        />
        <div className="card-body d-flex flex-column">
          <div className="product-description">
            <h6 className="card-title">{title}</h6>
            <p className="card-text ">{description}</p>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <span className="h5 mb-0 ms-1">${price}</span>
          <button className="btn btn-info me-1">
            <i className="bi bi-cart-plus" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
