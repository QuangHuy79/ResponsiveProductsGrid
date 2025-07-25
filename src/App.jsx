// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import ResponsiveProductsGrid from "./Components/Products/ResponsiveProductsGrid";
// import ReactHeaderTemplates from "./Components/Footer_Header/ReactHeaderTemplates";
// import ReactFooterTemplates from "./Components/Footer_Header/ReactFooterTemplates";
// import ShoppingCartTemplate from "./Components/shoppingCart/ShoppingCartTemplate";
// import { CartProvider } from "./Components/context/CartContext";

// function App() {
//   return (
//     <CartProvider>
//       <BrowserRouter>
//         <ReactHeaderTemplates />
//         <ResponsiveProductsGrid />
//         <ReactFooterTemplates />
//         <ShoppingCartTemplate />
//       </BrowserRouter>
//     </CartProvider>
//   );
// }

// export default App;

// ****** Thêm ProductDetail *******
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResponsiveProductsGrid from "./Components/Products/ResponsiveProductsGrid";
import ReactHeaderTemplates from "./Components/Footer_Header/ReactHeaderTemplates";
import ReactFooterTemplates from "./Components/Footer_Header/ReactFooterTemplates";
import ShoppingCartTemplate from "./Components/shoppingCart/ShoppingCartTemplate";
import { CartProvider } from "./Components/context/CartContext";
import ProductDetail from "./Components/ProductDetail/ProductDetail"; // Thêm dòng này

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ReactHeaderTemplates />
        <Routes>
          {/* Nơi định nghĩa các trang cụ thể theo URL */}
          <Route path="/" element={<ResponsiveProductsGrid />} />
          {/* Trang chính hiển thị danh sách sản phẩm */}
          <Route path="/product/:id" element={<ProductDetail />} />
          {/* Trang chi tiết từng sản phẩm */}
          <Route path="*" element={<Navigate to="/" />} />
          {/* Trang chi tiết từng sản phẩm */}
        </Routes>
        <ReactFooterTemplates />
        <ShoppingCartTemplate />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
