import { Link } from "react-router-dom";
import { TProduct } from "../../interfaces/TProduct";

type Props = {
  products: TProduct[];
};

const Dashboard = ({ products }: Props) => {
  return (
    <div className="">
      <h1 className="  text-center display-10 py-3 fw-bold text-body-emphasis">
        Dashboard
      </h1>
      <Link to="/admin/add" className="btn btn-primary my-2">
        {" "}
        Add new product
      </Link>
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((itme) => (
            <tr key={itme.id}>
              <td>{itme.id}</td>
              <td>{itme.title}</td>
              <td>{itme.price}</td>
              <td>{itme.description}</td>
              <td>
                <button className="btn btn-danger">Delete</button>
                <button className="btn btn-warning">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
