import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./components/screens/Homepage";
import Products from "./components/screens/Products";
import Product from "./components/screens/Product";

function App() {
  return (
    <Router basename="/exclusive">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/exclusive/products" element={<Products />} />
        <Route path="/exclusive/products/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
