import { SubmitHandler, useForm } from "react-hook-form";
import { TProduct } from "../../interfaces/TProduct";
import { useNavigate } from "react-router-dom";
type Props = {
  onAdd: (products: TProduct) => void;
};
const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TProduct>();
  const onSubmit = (product: TProduct) => {
    onAdd(product);
    console.log(product);
  };

  return (
    <div className=" text-center">
      <h1 className="display-10 py-3 fw-bold text-body-emphasis">
        Thêm sản phẩm
      </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            className="form-control"
            {...register("title", {
              required: true,
              minLength: 3,
              maxLength: 50,
            })}
          />
          {errors.title && (
            <div className="text-danger">Trường dữ liệu chưa đặt đúng</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            className="form-control"
            {...register("price", {
              required: true,
              min: 0,
            })}
          />
          {errors.price && (
            <div className="text-danger">Trường dữ liệu chưa đặt đúng</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            className="form-control"
            {...register("description")}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default ProductAdd;
