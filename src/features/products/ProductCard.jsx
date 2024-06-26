import { Link } from "react-router-dom";
import StarRating from "../../components/StarRating";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from "../cart/cartSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const currentQuantity = useSelector(getCurrentQuantityById(product.id));
  const isInCart = currentQuantity > 0;
  const handleAddToCart = () => {
    const newProduct = {
      productId: product.id,
      title: product.title,
      unitPrice: product.price,
      quantity: 1,
      totalPrice: product.price * 1,
      image: product.image,
    };
    dispatch(addItem(newProduct));
  };

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(product.id));
  };
  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(product.id));
  };
  return (
    <div className="group">
      <div className="relative overflow-hidden flex justify-center mb-3">
        <Link to={`/products/${product.id}`}>
          <img
            className="w-[120px] h-[120px] md:w-[180px] md:h-[180px] object-contain"
            src={product.image}
            alt=""
          />
        </Link>
        {isInCart ? (
          <div className="flex gap-2 items-center font-semibold absolute bottom-0 p-2 bg-white transition-all duration-300 transform translate-y-[56px] group-hover:translate-y-[-50%]">
            <button className="p-2 bg-gray-200" onClick={handleDecrease}>
              -
            </button>
            {currentQuantity}
            <button className="p-2 bg-gray-200" onClick={handleIncrease}>
              +
            </button>
          </div>
        ) : (
          <button
            className="font-semibold absolute bottom-0 p-4 bg-white transition-all duration-300 transform translate-y-[56px] group-hover:translate-y-[-50%]"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
      <div className="text-center sm:text-left">
        <span className="uppercase text-gray-400 text-[12px]">
          {product.category}
        </span>
        <Link to={`/products/${product.id}`}>
          <h4 className="mb-4">{product.title}</h4>
        </Link>
        <StarRating rating={product.rating} />
        <span className="font-bold">${product.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
