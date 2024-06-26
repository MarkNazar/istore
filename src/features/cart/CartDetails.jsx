import { HiOutlineX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decreaseItemQuantity,
  deleteItem,
  getTotalPrice,
  increaseItemQuantity,
} from "./cartSlice";

const CartDetails = () => {
  const { cart } = useSelector((store) => store.cart);
  const totalPrice = useSelector((store) => getTotalPrice(store));

  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteItem(id));
  };
  const handleIncrease = (id) => {
    dispatch(increaseItemQuantity(id));
  };
  const handleDecrease = (id) => {
    dispatch(decreaseItemQuantity(id));
  };

  if (!cart.length)
    return (
      <main className="max-w-[1000px] mx-auto mt-[60px] h-[200px] flex items-center justify-center">
        <div className="text-center">
          <p className="text-[50px] font-bold text-gray-300 mb-4">
            No products on the cart.
          </p>
          <Link to="/shop" className="px-4 py-2 bg-slate-800 text-white">
            Shop Now
          </Link>
        </div>
      </main>
    );
  return (
    <main className="mt-[60px]">
      <section className="max-w-[1000px] mx-auto  flex flex-col sm:flex-row items-start sm:items-center justify-center gap-6 text-lg px-4 py-16">
        <Link to="/cart" className="flex items-center gap-2 ">
          <span className="flex items-center justify-center bg-amber-600 text-white w-4 h-4 rounded-full p-3">
            1
          </span>
          Shopping Cart
        </Link>
        <Link to="/checkout" className="flex items-center gap-2 text-gray-400">
          <span className="flex items-center justify-center bg-gray-400 text-white w-4 h-4 rounded-full p-3">
            2
          </span>
          Checkout
        </Link>
        <Link className="flex items-center gap-2 text-gray-400 ">
          <span className="flex items-center justify-center bg-gray-400 text-white w-4 h-4 rounded-full p-3">
            3
          </span>
          Order Complete
        </Link>
      </section>

      <section className="container mx-auto px-4 flex flex-col md:flex-row gap-6  pb-10">
        <section className="basis-2/3">
          <div className="grid grid-cols-4 sm:grid-cols-7 mb-4 pb-4 border-b border-b-gray-300 gap-4">
            <div className="col-span-3">
              <h4 className="font-bold">Product</h4>
            </div>
            <div className="hidden sm:block">
              <h4 className="font-bold">Price</h4>
            </div>
            <div>
              <h4 className="font-bold">Quantity</h4>
            </div>
            <div className="hidden sm:block">
              <h4 className="font-bold">Subtotal</h4>
            </div>
          </div>

          <div className="mb-4 flex flex-col gap-6">
            {cart.map((item) => {
              return (
                <div
                  key={item.productId}
                  className="text-[14px] grid grid-cols-4 sm:grid-cols-7 items-center gap-4 pb-2 border-b border-b-gray-200"
                >
                  <div className="col-span-3">
                    <div className="flex items-center gap-4 relative">
                      <button
                        className=" transition duration-300border border border-gray-200 rounded-full p-1 sm:p-2 absolute top-1 -left-2  bg-white sm:relative hover:bg-red-500 hover:text-white"
                        onClick={() => handleDeleteItem(item.productId)}
                      >
                        <HiOutlineX />
                      </button>
                      <img
                        src={item.image}
                        className="w-14 h-14 object-contain"
                      />
                      <div>
                        <h5>{item.title}</h5>
                        <p className="text-xs mt-2 block sm:hidden">
                          {item.quantity} x{" "}
                          <span className="font-bold">${item.unitPrice}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <p className="font-bold">${item.unitPrice}</p>
                  </div>
                  <div className="flex">
                    <div className="flex gap-2 items-center font-semibold  bottom-0 bg-white border border-gray-100">
                      <button
                        className="p-2 bg-gray-100"
                        onClick={() => handleDecrease(item.productId)}
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="p-2 bg-gray-100"
                        onClick={() => handleIncrease(item.productId)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="hidden sm:block">
                    <h4 className="font-bold">${item.totalPrice.toFixed(2)}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section className="basis-1/3">
          <h4 className="mb-4 pb-4 border-b border-b-gray-300 font-bold">
            Cart Totals
          </h4>

          <div className="flex items-center justify-between gap-2 mb-1">
            <p>Subtotal</p>
            <p className="font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <div className="flex items-center justify-between gap-2 mb-1">
            <p>Shipping</p>
            <p className="font-bold">Free</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p>Total</p>
            <p className="font-bold">${totalPrice.toFixed(2)}</p>
          </div>
          <Link
            className="bg-amber-600 text-white text-center p-2 block mt-4"
            to="/checkout"
          >
            Proceed to checkout
          </Link>
        </section>
      </section>
    </main>
  );
};

export default CartDetails;
