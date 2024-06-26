import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
import { IoBagOutline } from "react-icons/io5";
import { getTotalCartQuantity, openCart } from "../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  // const cartQuantity = useSelector((store) => getTotalCartQuantity(store));
  const cartQuantity = useSelector((store) => getTotalCartQuantity(store));
  const dispatch = useDispatch();
  return (
    <header className="fixed bg-white z-20 top-0 left-0 right-0 shadow-sm border-b border-b-gray-200">
      <div className="flex items-center justify-between py-3 px-4 container mx-auto ">
        <Logo />
        <nav className="flex items-center gap-4">
          <NavLink to="/shop">Shop</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          {/* <Link to="/login">Login</Link> */}
          {/* <div className="w-[.4px] h-6 bg-gray-400"></div> */}
          <button
            className="flex items-center gap-2"
            onClick={() => dispatch(openCart())}
          >
            Cart
            <div className="relative">
              <IoBagOutline className="text-xl" />
              {cartQuantity ? (
                <span className="w-2 h-2 rounded-full bg-red-500 text-white flex items-center justify-center p-2 text-[8px] absolute top-[-8px] right-[-8px]">
                  {cartQuantity}
                </span>
              ) : null}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
