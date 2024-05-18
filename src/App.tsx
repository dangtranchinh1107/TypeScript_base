import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.scss";
import Header from "./component/Header/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { TProduct } from "./interfaces/TProduct";
import instance from "./services/api";
import Dashboard from "./pages/admin/Dashboard";
import ProductAdd from "./pages/admin/ProductAdd";
import ProductEdit from "./pages/admin/ProductEdit";

function App() {
  const navigate = useNavigate();

  // props = properties = các thuộc tính
  // state = trạng thái của data

  // Khai báo một state mới gọi là "products" với giá trị khởi tạo là mảng TProduct
  const [products, setProducts] = useState<TProduct[]>([]); // useState(value.default): giá trị lúc bắt đầu
  //  khai báo một state biến products với giá trị khởi tạo là mảng TProduct và một hàm setProducts để cập nhật giá trị của products.

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/products");
      setProducts(data);
    })();
  }, []);

  const handlerAddPro = (product: TProduct) => {
    (async () => {
      const newProduct = await instance.post("/products", product);
      setProducts([...products, newProduct]);
      alert("Thêm sản phẩm thành công");
      navigate("/admin");
    })();
  };
  /*
  1- Nếu k có dependencies thì call sẽ được gọi mỗi khi component dc render -> render lại liên tục
  nếu kết hợp setState trong callback 
  2- nếu có dependencies thì call sẽ được gọi mỗi khi dependencies thay đổi
  3- nếu dependencies là mảng rỗng thì callback chỉ được gọi 1 lần sau khi component được render 
  */
  return (
    <>
      <Header />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/admin">
          <Route index element={<Dashboard products={products} />} />
          <Route
            path="/admin/add"
            element={<ProductAdd onAdd={handlerAddPro} />}
          />
          <Route path="/admin/edit" element={<ProductEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
