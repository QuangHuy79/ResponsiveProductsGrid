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
          <Route path="/" element={<ResponsiveProductsGrid />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <ReactFooterTemplates />
        <ShoppingCartTemplate />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
