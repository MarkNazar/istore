import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Cart from "../../features/cart/Cart";
import { useSelector } from "react-redux";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <Cart />
    </>
  );
};

export default AppLayout;
