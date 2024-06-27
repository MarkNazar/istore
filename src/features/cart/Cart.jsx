import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, closeCart, getTotalPrice } from "./cartSlice";
import { Link } from "react-router-dom";
import { HiOutlineChevronRight } from "react-icons/hi2";
import useOnOutsideClick from "../../hooks/useOnOutsideClick";

const Cart = () => {
  const { cart = [] } = useSelector((store) => store.cart);
  const totalPrice = useSelector((store) => getTotalPrice(store));
  const { isCartActive } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const handleCloseCart = () => {
    dispatch(closeCart());
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const { ref } = useOnOutsideClick(handleCloseCart);

  return (
    <section
      className={`transition duration-500 fixed w-full top-0 h-full bg-black/20 z-50 cursor-pointer flex justify-end  ${
        isCartActive
          ? "translate-x-0 translate-y-0 opacity-100 "
          : "translate-x-[100vw] translate-y-0 opacity-0"
      }`}
    >
      <div
        ref={ref}
        className={`h-full  bg-white w-[80%] md:w-[500px] p-4 shadow-md flex flex-col transition duration-500 cursor-auto relative`}
      >
        <div className="mb-8 pb-2 border-b border-b-gray-200 flex items-center justify-between gap-2">
          <h2 className="font-bold text-xl ">Cart</h2>
          {cart.length > 0 && (
            <button
              className="text-xs rounded-md border-grey-200 border px-2 py-1  transition duration 300 hover:bg-red-500 hover:text-white"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          )}
        </div>

        {cart.length ? (
          <ul className="flex flex-col gap-8 overflow-y-auto">
            {cart?.map((item) => (
              <CartItem key={item.productId} item={item} />
            ))}
          </ul>
        ) : (
          <div className="text-center m-auto">
            <p className="mb-4 text-lg">No products on the cart</p>
            <Link to="/shop" className="px-4 py-2 bg-slate-800 text-white">
              Shop Now
            </Link>
          </div>
        )}
        {cart.length > 0 && (
          <div
            className={`${
              cart.length ? "mt-auto" : ""
            } font-bold border-b border-t pb-4 pt-4 border-b-gray-200 flex items-center justify-between gap-2`}
          >
            <p>Subtotal:</p>
            <p> ${totalPrice.toFixed(2)}</p>
          </div>
        )}
        {cart.length > 0 && (
          <div className="flex items-center gap-4 text-center pt-4">
            <Link to="/cart" className="flex-1 bg-slate-800 text-white p-2">
              View Cart
            </Link>
            <Link to="/checkout" className="flex-1 bg-amber-600 text-white p-2">
              Checkout
            </Link>
          </div>
        )}

        <button
          className="absolute p-2 -left-5 top-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-white z-30  shadow-md border border-gray-200"
          onClick={handleCloseCart}
        >
          <HiOutlineChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Cart;
