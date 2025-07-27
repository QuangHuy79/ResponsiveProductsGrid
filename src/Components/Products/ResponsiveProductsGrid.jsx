import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // 👈 THÊM
// import axios from "axios";
import "./ResponsiveProductsGrid.css";
import Product from "./Product";
import { getAllProducts } from "../../api/productsApi"; // import API
function ResponsiveProductsGrid() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // 👈 THÊM

  // ***** Hàm này đã tách Api có dùng Async/Await*****
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllProducts(); // từ file productsApi.js
        setProducts(res.data);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };
    fetchData();
  }, []);
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`, { state: product }); // 👈 Chuyển trang + truyền dữ liệu
  };

  // ***** Hàm này đã tách Api không dùng Async/Await*****
  // useEffect(() => {
  //   getAllProducts()
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.error("Lỗi khi gọi API:", err));
  // }, []);

  // ***** Hàm này chưa tách Api *****
  // useEffect(() => {
  //   axios
  //     .get("https://fakestoreapi.com/products")
  //     .then((res) => setProducts(res.data))
  //     .catch((err) => console.error("Lỗi khi gọi API:", err));
  // }, []);
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">All Our Products</h2>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {products.map((product) => (
          <div // 👈 THÊM
            key={product.id}
            onClick={() => handleProductClick(product)}
            style={{ cursor: "pointer" }}
          >
            <Product
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResponsiveProductsGrid;
