import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function ProductDetail() {
  // const location = useLocation();
  // const product = location.state;
  // const navigate = useNavigate();

  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Lỗi khi gọi API chi tiết:", err));
  }, [id]);

  // if (!product) return <p>Không tìm thấy sản phẩm.</p>;
  if (!product) return <p>Đang tải...</p>;

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Product Detail</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow p-4">
            <img
              src={product.image}
              alt={product.title}
              className="img-fluid mb-3"
            />
            <h4>{product.title}</h4>
            <p className="text-muted">{product.description}</p>
            <h5 className="text-danger">${product.price}</h5>

            {/* 2 nút cùng hàng, căn trái phải */}
            <div className="d-flex justify-content-between mt-4">
              <button
                className="btn btn-outline-info"
                onClick={() => navigate("/")}
              >
                <i className="fas fa-long-arrow-alt-left me-2" />
                Continue Shopping
              </button>

              <button className="btn btn-warning">
                <i className="bi bi-cart-plus me-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
