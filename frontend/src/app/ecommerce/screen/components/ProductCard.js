import React from "react";
import { Link } from "react-router-dom";

const ProductCard = () => {
  return (
    <div className="card-container">
      <Link to="book/python-programming">
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/6161h-ZkhuL.jpg"
          alt=""
        />
      </Link>
      <h2>Python Programming</h2>
      {/* <p>INR 1,588.99</p> */}
    </div>
  );
};

export default ProductCard;
