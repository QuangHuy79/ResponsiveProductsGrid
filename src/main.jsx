import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./Components/context/CartContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>
);
