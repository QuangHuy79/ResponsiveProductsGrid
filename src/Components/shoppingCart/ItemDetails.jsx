import React, { useState } from "react";

function ItemDetails() {
  const [quantity, setQuantity] = useState(1); // Số lượng ban đầu

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1)); // Không cho nhỏ hơn 1
  };

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div>
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  className="img-fluid rounded-3"
                  alt="Shopping item"
                  style={{ width: 65 }}
                />
              </div>
              <div className="ms-3">
                <h5>Iphone 11 pro</h5>
                <p className="small mb-0">256GB, Navy Blue</p>
              </div>
            </div>

            <div className="d-flex flex-row align-items-center gap-3">
              {/* Quantity Control */}
              <div className="d-flex align-items-center gap-2">
                <button
                  className="btn btn-sm btn-outline-secondary"
                  onClick={decreaseQuantity}
                >
                  −
                </button>

                <h5 className="fw-normal mb-0">{quantity}</h5>

                <button
                  className="btn btn-sm btn-outline-primary"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              {/* Price */}
              <div style={{ width: 80 }}>
                <h5 className="mb-0">${900 * quantity}</h5>
              </div>

              {/* Delete */}
              <a href="#!" style={{ color: "#cecece" }}>
                <i className="fas fa-trash-alt" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
