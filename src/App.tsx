import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { TProduct } from "./interfaces/TProduct";
import instance from "./services/api";

function App() {
  // props = properties = các thuộc tính
  // state = trạng thái của data

  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products products={products} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
