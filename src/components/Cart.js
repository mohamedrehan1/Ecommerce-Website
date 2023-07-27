import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Cart = (props) => {
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
          <div className="flex flex-col h-full">
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
            <div className="flex flex-col h-full">
              <ul className="p-5 flex-1">
                <li className="font-medium text-lg">Poster V1</li>
              </ul>
              <div className="px-5 py-3 border-b border-t flex flex-row items-center justify-between">
                <p className="text-globalcolor2 text-lg font-medium">
                  Subtotal:
                </p>{" "}
                <p className="text-[#585858] text-base font-medium">$119.95</p>
              </div>
              <div className="flex flex-col p-5 gap-5">
                <button className="bg-globalcolor2 text-white px-4 py-2 text-base font-normal tracking-widest">
                  <Link to={"/cart"}>VIEW CART</Link>
                </button>
                <button className="bg-globalcolor2 text-white px-4 py-2 text-base font-normal tracking-widest">
                  <Link to={"/checkout"}>CHECKOUT</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
