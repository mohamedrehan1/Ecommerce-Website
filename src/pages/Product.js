import { Link, Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { cartActions } from "../store/cart-slice";
import { useDispatch } from "react-redux";
import data from "../store/data";
import ProductCard from "../components/ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const [x, setX] = useState(100);
  const [y, setY] = useState(50);

  const [number, setNumber] = useState(1);
  const [nav, setNav] = useState({
    description: true,
    reviews: false,
  });

  const onZoom = (e) => {
    setX((state) => e.clientX - e.target.offsetLeft);
    setY((state) => e.clientY - e.target.offsetTop);
  };

  const [productData] = data.filter((element) => element.id === productId);

  if (!productData) {
    return <Navigate to={"/error"} />;
  }

  const categoryData = data.filter(
    (element) =>
      element.category === productData.category && element.id !== productData.id
  );

  const uniqueNumbers = [];
  const relatedProducts = [];

  while (uniqueNumbers.length < 3) {
    const randomNumber = Math.floor(Math.random() * 5);
    if (!uniqueNumbers.includes(randomNumber)) {
      uniqueNumbers.push(randomNumber);
      relatedProducts.push(categoryData[randomNumber]);
    }
  }

  return (
    <>
      <div className="h-20 border-b border-[#eaeaea]"></div>
      <div className="container mx-auto pt-20 mb-14">
        <div className="flex flex-col custom:flex-row gap-10 items-center">
          <div className="overflow-hidden custom:w-[55%]">
            <img
              className={`hover:scale-[2] transition-transform`}
              style={{ transformOrigin: `${x}px ${y}px` }}
              src={productData.bigImage}
              alt=""
              onMouseOver={onZoom}
              onMouseMove={onZoom}
            />
          </div>
          <div className="custom:w-[45%]">
            <p className="text-[1.05rem] text-[#777] font-normal leading-7 mb-4">
              <Link>Home</Link> / <Link>Posters</Link> / {productData.name}
            </p>
            <Link>
              <p className="text-globalcolor2 text-lg font-normal leading-7 mb-4">
                {productData.category}
              </p>
            </Link>
            <p className="text-black text-3xl font-normal mb-4">
              {productData.name}
            </p>
            <p className="text-textColor text-2xl font-semibold mb-2">$23.99</p>
            <p className="text-textColor text-lg font-normal mb-4">
              {productData.paragraph}
            </p>
            <div className="flex items-center justify-start gap-4 border-b border-borderColor2 pb-[17px]">
              <div className="flex items-center justify-start">
                <button
                  className="cursor-pointer border rounded-sm h-10 w-10 font-medium text-globalcolor3 flex justify-center items-center"
                  onClick={() => {
                    if (number > 1) {
                      setNumber((prev) => --prev);
                    }
                  }}
                >
                  -
                </button>
                <div className="border rounded-sm h-10 w-10 font-medium text-globalcolor3 flex justify-center items-center">
                  {number}
                </div>
                <button
                  className="cursor-pointer border rounded-sm h-10 w-10 font-medium text-globalcolor3 flex justify-center items-center"
                  onClick={() => {
                    setNumber((prev) => ++prev);
                  }}
                >
                  +
                </button>
              </div>
              <button
                className="text-white bg-globalcolor2 px-4 py-2 tracking-widest hover:bg-globalcolor1 transition-colors duration-300"
                onClick={() => {
                  dispatch(
                    cartActions.addItemToCart({
                      id: productData.id,
                      price: productData.price,
                      name: productData.name,
                      img: productData.url,
                      quantity: number,
                    })
                  );
                }}
              >
                ADD TO CART
              </button>
            </div>
            <div className="pt-2 mb-3">
              <span className="font-normal text-base text-textColor">
                Category:
              </span>
              <Link className="ml-1 text-globalcolor2 text-base font-normal">
                {productData.category}
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-borderColor2 mb-16">
          <ul className="list-none mb-[17px]">
            <li className="py-2 inline-block mr-[17px] text-[#515151] font-semibold text-lg">
              <button
                className={`${nav.description ? "active" : ""}`}
                onClick={() => {
                  if (!nav.description) {
                    setNav((prev) => {
                      return {
                        reviews: false,
                        description: true,
                      };
                    });
                  }
                }}
              >
                Description
              </button>
            </li>
            {/* <li className="py-2 inline-block text-[#515151] font-semibold text-lg">
            <button
              className={`${nav.reviews ? "active" : ""}`}
              onClick={() => {
                if (!nav.reviews) {
                  setNav((prev) => {
                    return {
                      description: false,
                      reviews: true,
                    };
                  });
                }
              }}
            >
              Reviews (0)
            </button>
          </li> */}
          </ul>
          <div>
            {productData.description.map((element, index) => (
              <div key={index}>
                <p className="text-textColor font-semibold text-base md:text-lg">
                  {element.head}
                </p>
                <ul className="list-disc ml-5 mb-6">
                  {element.body.map((el, index) => (
                    <li
                      key={index}
                      className="text-textColor font-normal text-base md:text-lg"
                    >
                      {el}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p>
              <strong className="text-textColor font-semibold text-base md:text-lg">
                Note:
              </strong>
              <em className="text-textColor font-normal text-base md:text-lg">
                There may be a slight difference in actual color, due to the
                colors of display.
              </em>
            </p>
          </div>
        </div>
        <section>
          <h2 className="font-medium text-black text-[25px] md:text-[41px]">
            Related products
          </h2>
          <div className="grid grid-cols-1 vsm:grid-cols-3 gap-5">
            {relatedProducts?.map((element) => (
              <div key={element.id}>
                <ProductCard productData={element} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Product;
