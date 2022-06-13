import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="ecommerce-container">
        <div className="branding">
          <Link to="/ebookopolis" className="logo">
            eBook
            <span>opolis</span>
          </Link>

          <p>Keepper of Computing And Information Technology Books</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
