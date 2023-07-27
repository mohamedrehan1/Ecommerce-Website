import React from "react";
import data from "../store/data";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <ul className="grid gap-5 grid-cols-1 vsm:grid-cols-3 gap-y-11">
      {data
        .filter(
          (element) =>
            element.name
              .toLowerCase()
              .trim()
              .includes(props.search.toLowerCase().trim()) &&
            element.price >= props.minPrice &&
            element.price <= props.maxPrice
        )
        .map((element) => {
          return (
            <li key={element.id} className="text-left">
              <Link to={`/shop/${element.id}`}>
                <img src={element.url} alt="" />
              </Link>
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
