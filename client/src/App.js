import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import Cart from "./pages/Cart";
function App() {
  const location = useLocation();
  const noNav = ["/login, /register"];
  return (
    <>
      {!noNav.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:product_id" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
