import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResponsiveProductsGrid from "./Components/Products/ResponsiveProductsGrid";
import ReactHeaderTemplates from "./Components/Footer_Header/ReactHeaderTemplates";
import ReactFooterTemplates from "./Components/Footer_Header/ReactFooterTemplates";
import ShoppingCartTemplate from "./Components/shoppingCart/ShoppingCartTemplate";
import ProductShowcaseComponent from "./Components/ProductShowcase/ProductShowcaseComponent";
function App() {
  return (
    <>
      <ReactHeaderTemplates></ReactHeaderTemplates>
      <ResponsiveProductsGrid></ResponsiveProductsGrid>
      <ReactFooterTemplates></ReactFooterTemplates>
      {/* <ShoppingCartTemplate></ShoppingCartTemplate> */}
      {/* <ProductShowcaseComponent></ProductShowcaseComponent> */}
    </>
  );
}

export default App;
