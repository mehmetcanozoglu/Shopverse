import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./context/Home";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";
import PaymentPage from "./pages/PaymentPage";
import { CartProvider } from "./context/CartContext";

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <CartProvider>
      <BrowserRouter basename={base}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/urunler" element={<ProductsPage />} />
          <Route path="/sepet" element={<CartPage />} />
          <Route path="/odeme" element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;