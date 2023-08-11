import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartActions } from "../store/cart-slice";

const CartPopup = (props) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeItemFromCart = (item) => {
    dispatch(cartActions.removeItemFromCart(item));
  };
  const closeCartPopup = () => {
    props.close();
  };

  return (
    <div>
      <div
        className={`overflow-hidden absolute left-0 top-0 h-[100vh] w-[100vw]  z-30  cursor-pointer transition-all ${
          props.show === "entering"
            ? "bg-black/40"
            : props.show === "exiting"
            ? "bg-black/0"
            : "bg-black/40"
        }`}
        id="black-layer"
        onClick={(e) => {
          e.target.id === "black-layer" && props.close();
        }}
      >
        <div
          className={`cursor-auto absolute right-0 top-0 z-40 bg-white h-[100vh] w-[100%] sm:w-[80%] md:w-[360px] transition-opacity duration-1000 ${
            props.show === "entering"
              ? "ModalOpen"
              : props.show === "exiting"
              ? "ModalClosed"
              : ""
          }`}
        >
          <div className="flex flex-col h-full ">
            <div className="p-5 border-b flex flex-row items-center justify-between">
              <h1 className="text-globalcolor2 font-semibold text-lg">
                Shopping Cart{" "}
              </h1>
              <button
                className="text-xl"
                onClick={() => {
                  props.close();
                }}
              >
                <FontAwesomeIcon
                  icon={faXmark}
                  size="sm"
                  style={{ color: "#74a84a" }}
                />
              </button>
            </div>
            <div className="flex flex-col h-full overflow-hidden">
              {cart.items.length === 0 ? (
                <>
                  <p className="flex-1 text-textColor text-lg font-normal flex items-center justify-center">
                    No products in the cart.
                  </p>
                  <div className="p-5">
                    <Link
                      className="block w-full bg-globalcolor2 text-black px-4 py-2 text-base font-normal tracking-widest text-center"
                      onClick={closeCartPopup}
                      to={"/shop"}
                    >
                      CONTINUE SHOPPING
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <ul className="p-5 flex-1 overflow-y-auto min-h-0">
                    {cart.items.map((item) => (
                      <li
                        key={item.id}
                        className="font-medium text-lg border-b border-borderColor2 last:border-0"
                      >
                        <div className="flex flex-row items-start p-3 pl-0">
                          <Link to={`/shop/${item.id}`}>
                            <img
                              className="w-[68px] h-[68px]"
                              src={item.img}
                              alt=""
                            />
                          </Link>
                          <div className="ml-4 flex-1 flex flex-row items-start justify-between">
                            <div>
                              <Link to={`/shop/${item.id}`}>
                                <p>{item.name}</p>
                              </Link>
                              <p className="text-textColor font-medium text-base">
                                {item.quantity} x {`$${item.price}`}
                              </p>
                            </div>
                            <button
                              className="text-globalcolor2 p-[1px] flex items-center justify-center text-[10px] font-medium w-5 h-5 border border-borderColor2 rounded-[50%]"
                              onClick={() => {
                                removeItemFromCart(item);
                              }}
                            >
                              &#10005;
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <div className="px-5 py-3 border-b border-t flex flex-row items-center justify-between">
                    <p className="text-globalcolor2 text-lg font-medium">
                      Subtotal:
                    </p>{" "}
                    <p className="text-[#585858] text-base font-medium">
                      ${cart.totalPrice}
                    </p>
                  </div>
                  <div className="flex flex-col p-5 gap-5">
                    <Link
                      className="bg-globalcolor2 text-white px-4 py-2 text-base font-normal tracking-widest text-center hover:bg-globalcolor1 transition-colors duration-300"
                      to={"/cart"}
                      onClick={closeCartPopup}
                    >
                      VIEW CART
                    </Link>

                    <Link
                      className="bg-globalcolor2 text-white px-4 py-2 text-base font-normal tracking-widest text-center hover:bg-globalcolor1 transition-colors duration-300"
                      to={"/checkout"}
                      onClick={closeCartPopup}
                    >
                      CHECKOUT
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPopup;
