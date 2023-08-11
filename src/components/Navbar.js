import logo from "../assets/imgs/EARTH-STORE-300x53.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCartShopping,
  faXmark,
  // faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import CartPopup from "./CartPopup";
import { Transition } from "react-transition-group";
import NavbarMobile from "./NavbarMobile";

const Navbar = (props) => {
  const cartItems = useSelector((state) => state.cart.totalQuantity);
  const [showCart, setShowCart] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);
  const cartRef = useRef(null);
  const navbarMobileRef = useRef(null);

  const handleCloseCart = () => {
    setShowCart(false);
    props.showCart(false);
  };

  const handleShowCart = () => {
    setShowCart(true);
    props.showCart(true);
  };

  const handleCloseNavbar = () => {
    setShowNavbar(false);
  };

  return (
    <>
      <Transition
        nodeRef={navbarMobileRef}
        in={showNavbar}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div ref={navbarMobileRef}>
            <NavbarMobile
              show={state}
              close={handleCloseNavbar}
              showNavbar={showNavbar}
            />
          </div>
        )}
      </Transition>
      <Transition
        nodeRef={cartRef}
        in={showCart}
        timeout={300}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <div ref={cartRef}>
            <CartPopup show={state} close={handleCloseCart} />
          </div>
        )}
      </Transition>
      <div className="relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 z-10 container mx-auto">
          <div className="flex flex-row items-center justify-between w-full">
            <Link to={"/"} className="">
              <img
                src={logo}
                alt=""
                className="max-w-[150px] vsm:max-w-[200px]"
              />
            </Link>
            <div className="flex flex-row items-center justify-between">
              <Link
                to={"/"}
                className="hidden custom:flex px-5 h-20 items-center letter tracking-[2.5px] leading-[100px]"
              >
                HOME
              </Link>
              <Link
                to={"about"}
                className="hidden custom:flex px-5 h-20 items-center tracking-[2.5px] leading-[100px]"
              >
                ABOUT
              </Link>
              <Link
                to={"shop"}
                className="px-5 h-20 hidden custom:flex items-center tracking-[2.5px] leading-[100px]"
              >
                SHOP
              </Link>
              <Link
                to={"contact"}
                className="px-5 h-20 hidden custom:flex items-center tracking-[2.5px] leading-[100px]"
              >
                CONTACT
              </Link>
              <div className="px-4 h-20 flex items-center">
                <span
                  className="cursor-pointer p-1 relative"
                  onClick={handleShowCart}
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="xl"
                    style={{ color: "#000000" }}
                  />
                  <div className="absolute left-[19px] transform -translate-x-1/2 top-[-12px] text-white min-h-[16px] min-w-[16px] rounded-full bg-black flex items-center justify-center font-normal text-xs">
                    {cartItems}
                  </div>
                </span>
              </div>
              {/* <Link className="h-20 hidden custom:flex items-center">
                <FontAwesomeIcon
                  icon={faUser}
                  size="xl"
                  style={{ color: "#000000" }}
                />
              </Link> */}
              {!showNavbar ? (
                <button
                  className="custom:hidden flex items-center justify-center bg-black w-[35px] rounded-md h-[35px]  mb-[13px]"
                  onClick={() => {
                    setShowNavbar(true);
                  }}
                >
                  <FontAwesomeIcon
                    className="h-[15px] w-[15px]"
                    icon={faBars}
                    style={{ color: "#ffffff" }}
                  />
                </button>
              ) : (
                <button
                  className="custom:hidden flex items-center justify-center bg-black w-[35px] rounded-md h-[35px]  mb-[13px]"
                  onClick={() => {
                    setShowNavbar(false);
                  }}
                >
                  <FontAwesomeIcon
                    icon={faXmark}
                    size="sm"
                    style={{ color: "#ffffff" }}
                  />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
