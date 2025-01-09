import React from "react";
import "./ProductsPage.css";

// Görselleri import et
import aiToolsImage from "../../assets/ai-tools.png";
import mobileAppImage from "../../assets/mobile-app.png";
import customSolutionsImage from "../../assets/custom-solutions.png";

const ProductsPage = () => {
  const products = [
    {
      id: 1,
      name: "AI Tools",
      description: "Revolutionize your productivity with our AI-powered solutions.",
      image: aiToolsImage, // Import edilen görsel
      buttonText: "Shop AI Tools",
      buttonLink: "https://gumroad.com/dashboard",
    },
    {
      id: 2,
      name: "Mobile Applications",
      description: "Download our mobile apps to streamline your business operations.",
      image: mobileAppImage, // Import edilen görsel
      buttonText: "View on Google Play",
      buttonLink: "https://play.google.com/store/apps/details?id=com.innoaits.knitmate&pcampaignid=web_share",
      secondaryButtonText: "Coming Soon to App Store",
      secondaryButtonDisabled: true,
    },
    {
      id: 3,
      name: "Custom Digital Solutions",
      description: "Custom templates, databases, and more for your business needs.",
      image: customSolutionsImage, // Import edilen görsel
      buttonText: "Shop Now",
      buttonLink: "https://gumroad.com/dashboard",
    },    
  ];

  return (
    <div className="products-page">
      <h1 className="products-title">Our Products</h1>
      <p className="products-intro">Explore our range of innovative digital solutions and applications.</p>

      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" /> {/* Görsel */}
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <div className="product-buttons">
              <a href={product.buttonLink} target="_blank" rel="noopener noreferrer" className="product-button">
                {product.buttonText}
              </a>
              {product.secondaryButtonText && (
                <button className={`product-button ${product.secondaryButtonDisabled ? "disabled" : ""}`} disabled={product.secondaryButtonDisabled}>
                  {product.secondaryButtonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
