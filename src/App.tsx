import { Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import Catalog from "@/pages/Catalog";
import ProductDetail from "@/pages/ProductDetail";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:categoryId" element={<Catalog />} />
      <Route path="/product/:productId" element={<ProductDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;