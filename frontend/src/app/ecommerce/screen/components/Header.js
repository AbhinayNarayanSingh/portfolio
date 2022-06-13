import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <header>
        <Link to="/ebookopolis" className="logo">
          eBook
          <span>opolis</span>
        </Link>
        <nav>
          <Link to="cart">CART</Link>
          <Link to="">SEARCH</Link>
          <Link to="">REQUEST</Link>
          <Link to="">LOGIN</Link>
        </nav>
      </header>
    </div>
  );
};

export default Header;
