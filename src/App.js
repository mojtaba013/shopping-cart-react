import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CheckOutPage from "./pages/CheckOutPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>
          <ToastContainer/>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckOutPage />} />
            </Routes>
          </Layout>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
