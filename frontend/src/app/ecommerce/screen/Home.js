import React from "react";
import ProductCard from "./components/ProductCard";

const Home = () => {
  return (
    <div>
      <div className="hero-container">
        <div className="ecommerce-container">
          <div className="hero">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>

      <div className="ecommerce-container">
        <div className="sub-heading">
          <div className="body">
            <h2>Popular In</h2>
            <p>IT Professionals</p>
          </div>
        </div>

        <div className="body-product-conatiner">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
