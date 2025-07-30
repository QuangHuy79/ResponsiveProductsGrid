// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom"; // 👈 THÊM
// import Pagination from "./Pagination";
// // import axios from "axios";
// import "./ResponsiveProductsGrid.css";
// import Product from "./Product";
// import {
//   getAllProducts,
//   getAllProductsByCategory,
// } from "../../api/productsApi"; // import API
// import { useSearchParams } from "react-router-dom";

// function ResponsiveProductsGrid() {
//   // ***** Phân trang 4 sản phẩm/Trang *****
//   const [allProducts, setAllProducts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 4;
//   // ***** ------ *****

//   const [products, setProducts] = useState([]);
//   const navigate = useNavigate(); // 👈 THÊM
//   const [searchParams] = useSearchParams();
//   const category = searchParams.get("category"); // đọc query

//   // ***** Phân trang 4 sản phẩm/Trang *****
//   const page = parseInt(searchParams.get("page")) || 1;

//   // ***** Phân trang 4 sản phẩm/Trang *****
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let res;
//         if (category) {
//           res = await getAllProductsByCategory(category);
//         } else {
//           res = await getAllProducts();
//           setAllProducts(res.data); // lưu toàn bộ danh sách
//           setCurrentPage(1); // reset về trang đầu khi đổi danh mục
//         }
//         const allProducts = res.data;

//         // 👉 Phân trang: 4 sản phẩm mỗi trang
//         const startIndex = (page - 1) * 4;
//         const paginatedProducts = allProducts.slice(startIndex, startIndex + 4);

//         setProducts(paginatedProducts);
//       } catch (err) {
//         console.error("Lỗi khi gọi API:", err);
//       }
//     };
//     fetchData();
//   }, [category, page]);

//   // ***** Hàm này để phân trang chưa phân trang 4 sản phẩm/Trang*****
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       let res;
//   //       if (category) {
//   //         res = await getAllProductsByCategory(category); // gọi API theo danh mục
//   //       } else {
//   //         res = await getAllProducts();
//   //       }
//   //       setProducts(res.data);
//   //     } catch (err) {
//   //       console.error("Lỗi khi gọi API:", err);
//   //     }
//   //   };
//   //   fetchData();
//   // }, [category]);
//   // ***** Hàm này đã tách Api có dùng Async/Await,chưa phân trang*****
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await getAllProducts(); // từ file productsApi.js
//   //       setProducts(res.data);
//   //     } catch (err) {
//   //       console.error("Lỗi khi gọi API:", err);
//   //     }
//   //   };
//   //   fetchData();
//   // }, []);

//   // 👉 Phân trang: 4 sản phẩm mỗi trang
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentProducts = allProducts.slice(indexOfFirstItem, indexOfLastItem);
//   // ***** ------ *****

//   const handleProductClick = (product) => {
//     navigate(`/product/${product.id}`, { state: product }); // 👈 Chuyển trang + truyền dữ liệu
//   };

//   // ***** Hàm này đã tách Api không dùng Async/Await,chưa phân trang*****
//   // useEffect(() => {
//   //   getAllProducts()
//   //     .then((res) => setProducts(res.data))
//   //     .catch((err) => console.error("Lỗi khi gọi API:", err));
//   // }, []);

//   // ***** Hàm này chưa tách Api,chưa phân trang *****
//   // useEffect(() => {
//   //   axios
//   //     .get("https://fakestoreapi.com/products")
//   //     .then((res) => setProducts(res.data))
//   //     .catch((err) => console.error("Lỗi khi gọi API:", err));
//   // }, []);
//   return (
//     <div className="container py-5">
//       <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
//         {currentProducts.map((product) => (
//           <div // 👈 THÊM
//             key={product.id}
//             onClick={() => handleProductClick(product)}
//             style={{ cursor: "pointer" }}
//           >
//             <Product
//               id={product.id}
//               image={product.image}
//               title={product.title}
//               price={product.price}
//               description={product.description}
//             />
//           </div>
//         ))}
//       </div>
//       {/* ***** Phân trang 4 sản phẩm/Trang ***** */}
//       <Pagination
//         totalItems={allProducts.length}
//         itemsPerPage={itemsPerPage}
//         currentPage={currentPage}
//         onPageChange={(page) => setCurrentPage(page)}
//       />
//     </div>
//   );
// }

// export default ResponsiveProductsGrid;

// ***** Thêm dữ liệu động từ Api *****

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"; // 👈 THÊM
import Pagination from "./Pagination";
import "./ResponsiveProductsGrid.css";
import Product from "./Product";
import {
  getAllProducts,
  getAllProductsByCategory,
} from "../../api/productsApi"; // import API

function ResponsiveProductsGrid() {
  // ***** Phân trang 4 sản phẩm/Trang *****
  const [products, setProducts] = useState([]);
  const itemsPerPage = 4;
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const category = searchParams.get("category"); // đọc query
  const page = parseInt(searchParams.get("page")) || 1;
  const [totalItems, setTotalItems] = useState(0);
  // ***** Hàm này để phân trang 4 sản phẩm/Trang *****
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        if (category) {
          res = await getAllProductsByCategory(category);
        } else {
          res = await getAllProducts();
        }

        const all = res.data;

        // 👉 Gán tổng số sản phẩm cho pagination
        setTotalItems(all.length);

        // 👉 Phân trang: 4 sản phẩm mỗi trang
        const startIndex = (page - 1) * itemsPerPage;
        const paginatedProducts = all.slice(
          startIndex,
          startIndex + itemsPerPage
        );

        setProducts(paginatedProducts);
      } catch (err) {
        console.error("Lỗi khi gọi API:", err);
      }
    };

    fetchData();
  }, [category, page]);

  // const handleProductClick = (product) => {
  //   navigate(`/product/${product.id}`, { state: product }); // 👈 Chuyển trang + truyền dữ liệu
  // };

  return (
    <div className="container py-5">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {/* {products.map((product) => (
          <div
            key={product.id} // 👈 THÊM
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
        ))} */}
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
      {/* ***** Phân trang 4 sản phẩm/Trang ***** */}
      <Pagination
        totalItems={totalItems} // 👈 dùng biến chính xác
        itemsPerPage={itemsPerPage}
        currentPage={page}
        onPageChange={(pageNum) =>
          navigate(`?${category ? `category=${category}&` : ""}page=${pageNum}`)
        }
      />
    </div>
  );
}

export default ResponsiveProductsGrid;
