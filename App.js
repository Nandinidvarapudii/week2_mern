import "./App.css";
import Navbar from "./Componets/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
