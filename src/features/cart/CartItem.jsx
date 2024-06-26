import { HiOutlineX } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteItem } from "./cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const { productId, title, unitPrice, totalPrice, quantity, image } = item;

  const handleDeleteItem = () => {
    dispatch(deleteItem(productId));
  };
  return (
    <li className="flex gap-4">
      <div>
        <img src={image} className="w-12 h-12 object-contain " />
      </div>
      <div className="flex-1">
        <Link to={`/products/${productId}`}>
          <h4 className="text-sm">{title}</h4>
        </Link>

        <p className="text-gray-500 text-[14px]">
          {quantity} x ${unitPrice}
        </p>
        <button
          className="block sm:hidden text-xs text-red-500"
          onClick={handleDeleteItem}
        >
          Delete
        </button>
      </div>
      <div className="hidden sm:block">
        <button
          className=" transition duration-300border border border-gray-200 rounded-full p-2 hover:bg-red-500 hover:text-white"
          onClick={handleDeleteItem}
        >
          <HiOutlineX />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
