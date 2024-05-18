import { TProduct } from "../interfaces/TProduct";
import { Link } from "react-router-dom";

type Props = {
  products: TProduct[];
};
// Props: truyền dữ liệu giữa các components
const Products = ({ products }: Props) => {
  console.log(products);

  return (
    <div className="container">
      <h1 className="display-10  text-body-emphasis text-center">
        Danh sách sản phẩm
      </h1>
      <div className="row gx-5">
        {products.map((item) => (
          // map dùng để loop
          <div
            key={item.id}
            className="col col-sm-12 col-md-6 col-lg-4 col-xl-3 "
          >
            <div className="product-card">
              <Link to={`/products/${item.id}`}>
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="product-image"
                />
              </Link>
              <div className="product-content">
                <Link to={`/products/${item.id}`}>
                  <h2>{item.title}</h2>
                </Link>
                <p>{item.price}</p>
                <p>{item.description}</p>
                <button className="btn btn-primary">Add to cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
