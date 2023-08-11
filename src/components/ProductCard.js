import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const ProductCard = (props) => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: props.productData.id,
        price: props.productData.price,
        quantity: 1,
        name: props.productData.name,
      })
    );
  };

  return (
    <div>
      <div className={` group relative cursor-pointer`}>
        <Link to={`/shop/${props.productData.id}`}>
          <img
            className="mb-3"
            src={props.productData.url}
            loading="lazy"
            alt=""
          />
        </Link>
        <div
          className={`element group/item transition-all opacity-0 invisible group-hover:visible absolute top-5 right-5 cursor-pointer h-8 w-8 shadow-md bg-white rounded-[50%] flex items-center justify-center`}
          onClick={addItemToCart}
        >
          <FontAwesomeIcon
            icon={faCartShopping}
            size="sm"
            style={{ color: "#74a84a" }}
          />
          <div className="absolute transition-all opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible right-10 z-20 whitespace-nowrap text-sm font-normal text-white bg-[#74a84a] rounded-[3px] px-4 py-1 after:content-[''] after:absolute after:-right-[10px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-[5px] after:border-l-globalcolor2 after:border-r-transparent after:border-y-transparent">
            Add to cart
          </div>
        </div>
      </div>
      <p className="text-textColor text-sm md:text-base mb-1">
        {props.productData.category}
      </p>
      <p className="font-medium md:text-lg mb-1">{props.productData.name}</p>
      <p className="font-bold text-sm md:text-base text-textColor">
        ${props.productData.price}
      </p>
    </div>
  );
};

export default ProductCard;
