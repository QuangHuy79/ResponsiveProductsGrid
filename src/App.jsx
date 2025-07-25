import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ResponsiveProductsGrid from "./Components/Products/ResponsiveProductsGrid";
import ReactHeaderTemplates from "./Components/Footer_Header/ReactHeaderTemplates";
import ReactFooterTemplates from "./Components/Footer_Header/ReactFooterTemplates";
import ShoppingCartTemplate from "./Components/shoppingCart/ShoppingCartTemplate";
import { CartProvider } from "./Components/context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <ReactHeaderTemplates />
        <ResponsiveProductsGrid />
        <ReactFooterTemplates />
        <ShoppingCartTemplate />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
