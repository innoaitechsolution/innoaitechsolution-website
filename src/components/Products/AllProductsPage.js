import React from "react";
import products from "../../data/products.json"; 
import "./AllProductsPage.css";

const AllProductsPage = () => {
  return (
    <div className="all-products-page">
      <h1>All Products</h1>
      <p>Explore our range of products below. Click on a product to learn more or make a purchase.</p>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className="product-link"
            >
              View Product
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductsPage;
