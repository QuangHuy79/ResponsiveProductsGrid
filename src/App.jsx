import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveProductsGrid from "./Components/Products/ResponsiveProductsGrid";
import ShoppingCartTemplate from "./Components/shoppingCart/ShoppingCartTemplate";
import ProductShowcaseComponent from "./Components/ProductShowcase/ProductShowcaseComponent";
function App() {
  return (
    <>
      <h1>ResponsiveProductsGrid</h1>
      <ResponsiveProductsGrid></ResponsiveProductsGrid>
      {/* <ShoppingCartTemplate></ShoppingCartTemplate> */}
      {/* <ProductShowcaseComponent></ProductShowcaseComponent> */}
    </>
  );
}

export default App;
