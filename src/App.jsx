import "./App.css";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Category from "./components/Categorie";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:category" element={<Category />} />
         
          </Routes>
          <Footer/>
        </BrowserRouter>
       
      </div>
    </>
  );
}

export default App;
