import React, { useEffect, useState } from "react";
// import axios from "axios";
import "./ResponsiveProductsGrid.css";
import Product from "./Product";
import { getAllProducts } from "../../api/productsApi"; // import API
function ResponsiveProductsGrid() {
  const [products, setProducts] = useState([]);

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
    <div>
      <>
        <div className="container py-5">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
            {products.map((product) => (
              <Product
                key={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
        </div>
      </>
    </div>
  );
}

export default ResponsiveProductsGrid;
