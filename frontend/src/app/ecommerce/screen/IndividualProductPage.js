import React from "react";

const IndividualProductPage = () => {
  return (
    <div className="IndividualProductPage">
      <div className="product-details">
        <div className="img">
          <img
            src="https://images-na.ssl-images-amazon.com/images/I/510JjoNTdOL._SX379_BO1,204,203,200_.jpg"
            alt=""
          />
        </div>
        <div className="detail">
          <h2>
            JavaScript: The Definitive Guide - 6th Edition : Activate Your Web
            Pages (Definitive Guides)
          </h2>
          <p>By David Flanagan</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className="related-product"></div>
    </div>
  );
};

export default IndividualProductPage;
