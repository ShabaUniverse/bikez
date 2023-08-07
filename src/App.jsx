import Header from "./components/Header";
import About from "./pages/About";
import Bag from "./pages/Bag";
import DetailedProduct from "./pages/DetailedProduct";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import "./styles/App.css";
import { Routes, Route } from "react-router-dom";
import "animate.css";
import Service from "./pages/Service";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/service" element={<Service />} />
        <Route path={`/shop/product/:id`} element={<DetailedProduct />} />
      </Routes>
    </div>
  );
}

export default App;
