import { BrowserRouter, Routes, Route } from 
"react-router-dom";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound.jsx";

function App() {
  return (
  <BrowserRouter>
    <>
      <Route path="/" element={<Homepage />}/>
      <Route path="product" element={<Product />}/>
      <Route path="pricing" element={<Pricing />}/>
      <Route path='*' element={<h1>PageNotFound</h1>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App 
