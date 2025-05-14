import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/screens/Homepage";
import Products from "./components/screens/Products";
import Product from "./components/screens/Product";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
