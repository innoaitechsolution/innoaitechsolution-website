import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import ServicesPage from "./components/ServicesPage/ServicesPage";
import BlogPage from "./components/Blog/BlogPage";
import BlogDetailPage from "./components/Blog/BlogDetailPage";
import ContactPage from "./components/Contact/ContactPage";
import ProductsPage from "./components/Products/ProductsPage";
import AllProductsPage from "./components/Products/AllProductsPage";
import PrivacyPolicy from "./privacypolicy/PrivacyPolicy";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />      
        <Route path="/services" element={<ServicesPage />} />       
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/all-products" element={<AllProductsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
