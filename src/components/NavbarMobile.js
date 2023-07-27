import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/imgs/EARTH-STORE-300x53.png";

const NavbarMobile = (props) => {
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
      ></div>
      <div
        className={`${
          props.showNavbar === true || props.show === "exiting"
            ? "lock-position"
            : ""
        } absolute right-0 top-0 z-30 bg-white h-[100vh] w-[100%] sm:w-[80%] md:w-[360px] transition-opacity duration-1000 ${
          props.show === "entering"
            ? "ModalOpen"
            : props.show === "exiting"
            ? "ModalClosed"
            : ""
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="p-5 border-b flex flex-row items-center justify-between">
            <Link
              to={"/"}
              className=""
              onClick={() => {
                props.close();
              }}
            >
              <img src={logo} alt="" className="max-w-[150px]" />
            </Link>
            <button
              className="text-xl"
              onClick={() => {
                props.close();
              }}
            >
              <FontAwesomeIcon
                icon={faXmark}
                size="sm"
                style={{ color: "#000000" }}
              />
            </button>
          </div>
          <ul>
            <li className="border-b border-borderColor2">
              <Link
                to={"/"}
                className="flex px-5 h-20 items-center letter tracking-[2.5px] leading-[100px]"
                onClick={() => {
                  props.close();
                }}
              >
                HOME
              </Link>
            </li>
            <li className="border-b border-borderColor2">
              <Link
                to={"about"}
                className="flex px-5 h-20 items-center tracking-[2.5px] leading-[100px]"
                onClick={() => {
                  props.close();
                }}
              >
                ABOUT
              </Link>
            </li>
            <li className="border-b border-borderColor2">
              <Link
                to={"shop"}
                className="px-5 h-20  flex items-center tracking-[2.5px] leading-[100px]"
                onClick={() => {
                  props.close();
                }}
              >
                SHOP
              </Link>
            </li>
            <li className="border-b border-borderColor2">
              <Link
                to={"contact"}
                className="px-5 h-20 flex items-center tracking-[2.5px] leading-[100px]"
                onClick={() => {
                  props.close();
                }}
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
