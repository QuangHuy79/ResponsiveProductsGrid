import React from "react";
import "./ResponsiveProductsGrid.css";
function ResponsiveProductsGrid() {
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"
        />
        <div className="container py-5">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {/* Product 1 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1598618826732-fb2fdf367775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHxzbWFydHBob25lfGVufDB8MHx8fDE3MjEzMDU4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  className="card-img-top"
                  alt="Product 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 1</h5>
                  <p className="card-text">
                    A brief description of Product 1 and its features.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$19.99</span>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1720048171731-15b3d9d5473f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MXwxfHNlYXJjaHwxfHxzbWFydHBob25lfGVufDB8MHx8fDE3MjEzMDU4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  className="card-img-top"
                  alt="Product 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 2</h5>
                  <p className="card-text">
                    A brief description of Product 2 and its features.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$24.99</span>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1600087626120-062700394a01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxzbWFydHBob25lfGVufDB8MHx8fDE3MjEzMDU4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  className="card-img-top"
                  alt="Product 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 3</h5>
                  <p className="card-text">
                    A brief description of Product 3 and its features.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$29.99</span>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="col">
              <div className="card h-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1598965402089-897ce52e8355?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxzbWFydHBob25lfGVufDB8MHx8fDE3MjEzMDU4NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080"
                  className="card-img-top"
                  alt="Product 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Product 4</h5>
                  <p className="card-text">
                    A brief description of Product 4 and its features.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="h5 mb-0">$34.99</span>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus" /> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ResponsiveProductsGrid;
