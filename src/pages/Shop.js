import React, { useState } from "react";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [minPrice, setMinPrice] = useState(10);
  const [maxPrice, setMaxPrice] = useState(30);
  const [search, setSearch] = useState("");

  const handleMinPriceChange = (event) => {
    const value = parseInt(event.target.value);

    if (value < maxPrice) {
      setMinPrice(value);
    } else if (value > maxPrice) {
      setMaxPrice(value + 1);
      setMinPrice(value);
    }
  };

  const handleMaxPriceChange = (event) => {
    const value = parseInt(event.target.value);

    if (value > minPrice) {
      setMaxPrice(value);
    } else if (value < minPrice) {
      setMinPrice(value - 1);
      setMaxPrice(value);
    }
  };

  return (
    <div className="container mx-auto pt-20">
      <div className="h-20 border-t border-[#eaeaea]"></div>
      <div className="flex flex-col custom:flex-row-reverse">
        <div className="flex flex-col custom:border-l custom:border-borderColor2 custom:pl-14 custom:mb-16 pb-6 custom:w-[73%]">
          <div className="">
            <p className="text-[1.05rem] text-[#777] font-normal leading-7 mb-5">
              <Link to={"/"}> Home</Link> / Shop
            </p>
            <h1 className="text-globalcolor2 text-6xl sm:text-7xl font-normal mb-16">
              Shop
            </h1>
            <div className="flex flex-col vsm:flex-row items-start vsm:items-center justify-between mb-10">
              <p className="text-[1.05rem] text-textColor font-normal text-lg leading-7 mb-2 vsm:mb-0">
                Showing all 12 results
              </p>
              <select
                name="orderby"
                className="border-transparent px-5 py-3 font-normal text-lg text-[#666] outline-transparent focus:border-dotted focus:border-[thin] focus:border-black selection:bg-globalcolor2 "
              >
                <option value="menu_order">Default sorting</option>
                <option value="popularity">Sort by popularity</option>
                <option value="rating">Sort by average rating</option>
                <option value="date">Sort by latest</option>
                <option value="price">Sort by price: low to high</option>
                <option value="price-desc">Sort by price: high to low</option>
              </select>
            </div>
          </div>
          {<Card search={search} minPrice={minPrice} maxPrice={maxPrice} />}
        </div>
        <div className="custom:pr-14 custom:w-[27%] mb-20">
          <div className="flex flex-row mb-[47px]">
            <input
              className="border border-borderColor2 p-3 flex-1 outline-none focus:border-[#bdbdbd]"
              type="search"
              name=""
              id=""
              placeholder="Search products…"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button className="bg-globalcolor2 px-4 py-3 ml-[10px]">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                rotation={90}
                style={{ color: "#ffffff" }}
              />
            </button>
          </div>
          <div className="mb-11">
            <h2 className="text-globalcolor2 font-medium text-xl mb-[17px]">
              Filter by price
            </h2>
            <div className="w-full h-[3px] my-4 relative">
              <div className="w-full overflow-hidden">
                <span className="absolute top-0 left-0 right-0 h-[3px] bg-borderColor2"></span>
                <span
                  className="absolute top-0 h-[3px] bg-black right-0 overflow-hidden max-w-full"
                  style={{
                    left: `${
                      ((minPrice - 10) * 100) / 20 >= 0
                        ? ((minPrice - 10) * 100) / 20
                        : 0
                    }%`,
                    right: `${
                      100 - ((maxPrice - 10) * 100) / 20 >= 0
                        ? 100 - ((maxPrice - 10) * 100) / 20
                        : 0
                    }%`,
                  }}
                ></span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  className="absolute left-0 top-0 h-0 appearance-none pointer-events-none range-input w-full"
                  min="10"
                  max="30"
                  value={minPrice}
                  onChange={handleMinPriceChange}
                />
                <input
                  type="range"
                  className="absolute left-0 top-0 h-0 appearance-none pointer-events-none range-input w-full"
                  min="10"
                  max="30"
                  value={maxPrice}
                  onChange={handleMaxPriceChange}
                />
              </div>
            </div>
            <div className="my-4 flex flex-row items-center justify-end gap-2 ">
              <input
                className="border border-borderColor2 py-2 px-0 w-[60px] text-center rounded-[5px]"
                type="text"
                value={`$${minPrice}`}
                readOnly
              />
              <input
                className="border border-borderColor2 p-3 py-2 px-0 w-[60px] text-center rounded-[5px]"
                type="text"
                value={`$${maxPrice}`}
                readOnly
              />
            </div>
            {maxPrice - minPrice < 20 ? (
              <div className=" w-full flex flex-row justify-end">
                <button
                  className="px-5 py-[8px] bg-globalcolor2 text-white text-lg font-normal tracking-[3px] underline"
                  onClick={() => {
                    setMinPrice(10);
                    setMaxPrice(30);
                  }}
                >
                  RESET
                </button>
              </div>
            ) : null}
          </div>
          <div>
            <h2 className="text-globalcolor2 font-medium text-xl mb-[14px]">
              Categories
            </h2>
            <div className="flex flex-row items-center gap-1 pl-4 mb-1">
              <Link className="text-globalcolor2 font-normal text-lg">
                Postcards
              </Link>
              <p className="font-sans">(6)</p>
            </div>
            <div className="flex flex-row items-center gap-1 pl-4">
              <Link className="text-globalcolor2 font-normal text-lg">
                Posters
              </Link>
              <p className="font-sans">(6)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
