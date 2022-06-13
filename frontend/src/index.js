import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// ! Apps
import App from "./app/core/App";
import BookkepingRoutes from "./app/bookkepping/BookkepingRoutes";
import ECommerceRoutes from "./app/ecommerce/ECommerceRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/bookkeping" element={<BookkepingRoutes />} />
        <Route path="/ebookopolis/*" element={<ECommerceRoutes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
