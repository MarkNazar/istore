import { useDispatch, useSelector } from "react-redux";
import StarRating from "../../components/StarRating";
import useFetchProduct from "./useFetchProduct";
import { getCurrentQuantityById, updateItemQuantity } from "../cart/cartSlice";
import { useState } from "react";
import Spinner from "../../components/ui/Spinner";

const ProductDetail = () => {
  const { product, isLoading, error } = useFetchProduct();
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantityById(product?.id));

  if (isLoading)
    return (
      <div className="flex items-center justify-center mt-[60px] px-4 min-h-60">
        <Spinner />
      </div>
    );

  const { image, title, description, category, rating, price, id } = product;

  const handeUpdateQuantity = () => {
    const newProduct = {
      productId: id,
      title,
      unitPrice: price,
      quantity,
      totalPrice: price * quantity,
      image,
    };
    dispatch(updateItemQuantity(newProduct));
  };

  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };
  const handleDecrease = () => {
    if (quantity === 0) return;
    setQuantity((prev) => prev - 1);
  };

  return (
    <main className="max-w-[1000px] mx-auto mt-[60px] px-4">
      <section className="py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div>
            <img
              className="w-[160px] h-[160px] sm:w-[250px] sm:h-[250px] object-contain mx-auto"
              src={image}
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-xl sm:text-2xl font-bold mb-6">{title}</h1>
            <StarRating rating={rating} />
            <p className="mb-6 mt-2 font-semibold text-lg">${price}</p>
            <p className="mb-6">{description}</p>
            <div className="flex justify-center flex-wrap sm:justify-start gap-4 mb-4">
              <div className="flex border border-gray-200">
                <button className="bg-gray-100 p-3" onClick={handleDecrease}>
                  -
                </button>
                <input
                  type="number"
                  min={1}
                  value={quantity}
                  onChange={(e) => setQuantity(+e.target.value)}
                  className="max-w-10 text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                />
                <button className="bg-gray-100 p-3" onClick={handleIncrease}>
                  +
                </button>
              </div>
              <button
                className="p-3 bg-slate-800 text-white uppercase"
                onClick={handeUpdateQuantity}
              >
                Add to cart
              </button>
            </div>
            <div>
              <p className="uppercase text-gray-400 text-[12px]">
                Categories: <span>{category}</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetail;
