import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const dispatch = useDispatch();

  const [pulseAnimation, setPulseAnimation] = useState(0);

  const addItemToCart = (item) => {
    dispatch(
      cartActions.addItemToCart({
        id: item.id,
        price: item.price,
        name: item.name,
        img: item.url,
        quantity: 1,
      })
    );
  };

  return (
    <ul className="grid gap-5 grid-cols-1 vsm:grid-cols-3 gap-y-11">
      {props.data.map((element) => {
        return (
          <li key={element.id} className="text-left">
            <div className={`group relative cursor-pointer`}>
              <Link to={`/shop/${element.id}`}>
                <img
                  src={element.url}
                  alt=""
                  loading="lazy"
                  className="w-full h-auto aspect-square"
                />
              </Link>
              <div
                className={`element group/item transition-all opacity-0 invisible group-hover:visible absolute top-5 right-5 cursor-pointer h-8 w-8 shadow-md bg-white rounded-[50%] flex items-center justify-center`}
                onClick={() => {
                  addItemToCart(element);
                  setPulseAnimation(1);
                }}
              >
                <FontAwesomeIcon
                  icon={faCartShopping}
                  size="sm"
                  style={{ color: "#74a84a" }}
                  className="image"
                  onAnimationEnd={() => setPulseAnimation(0)}
                  pulse-animation={pulseAnimation}
                />
                <div className="absolute transition-all opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible right-10 z-20 whitespace-nowrap text-sm font-normal text-white bg-[#74a84a] rounded-[3px] px-4 py-1 after:content-[''] after:absolute after:-right-[10px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-[5px] after:border-l-globalcolor2 after:border-r-transparent after:border-y-transparent">
                  Add to cart
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-[3px]">
              <span className="text-[#585858] font-normal text-base opacity-60 mb-[2px]">
                {element.category}
              </span>
              <Link
                to={`/shop/${element.id}`}
                className="text-black font-medium text-lg"
              >
                {element.name}
              </Link>
              <p className="text-[#585858] font-medium text-base">
                ${element.price}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
