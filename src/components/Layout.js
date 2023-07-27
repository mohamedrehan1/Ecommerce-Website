import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const Layout = () => {
  const [showCart,setShowCart] = useState(false)

  const handleShowCart = (value) => {
    setShowCart(value)
  };
  return (
    <div className={`${showCart ? "overflow-y-auto max-h-[100vh]" : ""}`}>
      <Navbar showCart={handleShowCart} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
