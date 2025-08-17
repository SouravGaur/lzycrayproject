import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import CategorySelector from "./pages/CategorySelector.jsx";
import Upload from "./pages/Upload.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import Category from "./pages/Category.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* App is layout (with Header + Footer) */}
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="CategorySelector" element={<CategorySelector />} />
          <Route path=":category" element={<Category />} />
          <Route path=":category/:id" element={<ProductPage />} />
          <Route path="upload" element={<Upload />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
