import React from "react";
import "./ProductShowcaseComponent.css";
function ProductShowcaseComponent() {
  return (
    <div>
      <div className="bg-light p-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <div className="product-card bg-white rounded-4 shadow-sm h-100 position-relative">
                <span className="badge bg-danger">New</span>
                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1669937401489-fb1ebb31d762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNXx8aGVhZHBob25lfGVufDB8MHx8fDE3MzA1NTUzNjl8MA&ixlib=rb-4.0.3&q=80&w=1080"
                    className="product-image w-100"
                    alt="Product"
                  />
                </div>
                <div className="p-4">
                  <h5 className="fw-bold mb-3">Premium Wireless Headphones</h5>
                  <div className="d-flex align-items-center mb-3">
                    <div className="me-2">
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star text-warning" />
                      <i className="fas fa-star-half-alt text-warning" />
                    </div>
                    <small className="text-muted">(4.5/5)</small>
                  </div>
                  <p className="text-muted mb-4">
                    Experience crystal clear sound with our premium wireless
                    headphones featuring noise cancellation.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="price">$299</span>
                    <button className="btn btn-info text-white px-4 py-2">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductShowcaseComponent;
