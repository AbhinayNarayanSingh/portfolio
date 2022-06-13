import React from "react";
import { Routes, Route } from "react-router-dom";

import "../../scss/ecommerce/index.scss";

import Header from "./screen/components/Header";
import Footer from "./screen/components/Footer";

import Home from "./screen/Home";
import Cart from "./screen/Cart";

import IndividualProductPage from "./screen/IndividualProductPage";

const ECommerceRoutes = () => {
  return (
    <div className="ecommerce">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:slug" element={<IndividualProductPage />} />
        <Route path="/cart" element={<Cart />} exact />
      </Routes>
      <Footer />
    </div>
  );
};

export default ECommerceRoutes;
