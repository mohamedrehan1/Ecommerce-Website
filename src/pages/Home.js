import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import banner from "../assets/imgs/Banner.jpg";
import { Link } from "react-router-dom";
import { faCartShopping, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import customer1 from "../assets/imgs/customer1.jpeg";
import customer2 from "../assets/imgs/customer2.jpg";
import customer3 from "../assets/imgs/customer3.jpg";
import poster1 from "../assets/products/poster-v1.jpg";
import poster2 from "../assets/products/poster-v2.jpg";
import poster3 from "../assets/products/poster-v3.jpg";
import classes from "./Home.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Home = () => {
  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id: "pv1",
        price: 23.99,
        quantity: 1,
        name: "poster v1",
      })
    );
  };
  return (
    <>
      <div
        className="bg-no-repeat bg-scroll bg-cover w-full"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex justify-center items-center flex-col py-[120px] md:py-[150px] lg:py-[250px] gap-4 ">
          <div>
            <h1 className=" text-5xl md:text-6xl lg:text-7xl text-globalcolor1 tracking-wider font-semibold">
              EARTH
            </h1>
          </div>
          <div>
            <h2 className="text-black text-2xl md:text-4xl lg:text-5xl font-light tracking-wider">
              MULTIPURPOSE STORE
            </h2>
          </div>
          <div>
            <button className="bg-globalcolor2 tracking-widest px-7 py-3 lg:px-10 hover:bg-globalcolor1 transition-colors duration-300 mt-7 w-auto">
              <Link
                to={"shop"}
                className=" text-white text-sm md:text-base lg:text-lg"
              >
                SHOP NOW
              </Link>
            </button>
          </div>
        </div>
      </div>
      {/* best seller section */}
      <div className="container mx-auto min-h-screen flex items-center justify-center">
        <div className="my-20 p-5">
          <h2 className="font-bold mb-20 text-center text-3xl md:text-4xl lg:text-5xl">
            Best Seller
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(155px,1fr))] gap-5 justify-items-center">
            <div className=" ">
              <div className={`${classes.group} group relative cursor-pointer`}>
                <Link to={"/shop/poster-v1"}>
                  <img className="mb-3" src={poster1} loading="lazy" alt="" />
                </Link>
                <div
                  className={`${classes.element} group/item transition-all opacity-0 invisible group-hover:visible absolute top-5 right-5 cursor-pointer h-8 w-8 shadow-md bg-white rounded-[50%] flex items-center justify-center`}
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
              <p className="text-textColor text-base mb-1">Posters</p>
              <p className="font-medium text-lg mb-1">Poster V1</p>
              <p className="font-bold text-base text-textColor">$23.99</p>
            </div>
            <div className="">
              <div className={`${classes.group} group relative cursor-pointer`}>
                <img className="mb-3" src={poster2} alt="" />
                <div
                  className={`${classes.element} group/item transition-all invisible hover:opacity-100 opacity-0 group-hover:visible group-hover:opacity-70 absolute top-5 right-5 cursor-pointer h-8 w-8 shadow-md  bg-white rounded-[50%] flex items-center justify-center`}
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="sm"
                    style={{ color: "#74a84a" }}
                    className=""
                  />
                  <div className="absolute transition-all opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible right-10 z-20 whitespace-nowrap text-sm font-normal text-white bg-[#74a84a] rounded-[3px] px-4 py-1 after:content-[''] after:absolute after:-right-[10px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-[5px] after:border-l-globalcolor2 after:border-r-transparent after:border-y-transparent">
                    Add to cart
                  </div>
                </div>
              </div>
              <p className="text-textColor text-base mb-1">Posters</p>
              <p className="font-medium text-lg mb-1">Poster V2</p>
              <p className="font-bold text-base text-textColor">$17.99</p>
            </div>
            <div className="">
              <div
                className={`${classes.group} relative group cursor-pointer`}
                onClick={() => {}}
              >
                <img className="mb-3" src={poster3} alt="" />
                <div
                  className={`${classes.element} group/item transition-all hover:opacity-100 opacity-0 invisible group-hover:visible group-hover:opacity-70 absolute top-5 right-5 cursor-pointer h-8 w-8 shadow-md bg-white rounded-[50%] flex items-center justify-center`}
                >
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="sm"
                    style={{ color: "#74a84a" }}
                    className=""
                  />
                  <div className="absolute transition-all opacity-0 invisible group-hover/item:opacity-100 group-hover/item:visible right-10 z-20 whitespace-nowrap text-sm font-normal text-white bg-[#74a84a] rounded-[3px] px-4 py-1 after:content-[''] after:absolute after:-right-[10px] after:top-1/2 after:-translate-y-1/2 after:w-0 after:h-0 after:border-[5px] after:border-l-globalcolor2 after:border-r-transparent after:border-y-transparent">
                    Add to cart
                  </div>
                </div>
              </div>
              <p className="text-textColor text-base mb-1">Posters</p>
              <p className="font-medium text-lg mb-1">Poster V3</p>
              <p className="font-bold text-base text-textColor">$14.99</p>
            </div>
          </div>
        </div>
      </div>
      {/* feedbacks section */}
      <div className="container mx-auto min-h-screen border-solid border-borderColor border-t">
        <div className="py-20">
          <h2 className="font-bold mb-20 text-center text-2xl md:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-[repeat(auto-fill,minmax(325px,1fr))] gap-14">
            <div className="">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="2xl"
                  style={{ color: "#2c541d" }}
                />
              </div>
              <p className="mb-5 font-normal text-textColor text-lg">
                Fast shipping and excellent customer service. The product was
                even better than expected. I will definitely be a returning
                customer.
              </p>
              <div>
                <img
                  loading="lazy"
                  className="h-10 rounded-full w-10 object-cover mb-5"
                  src={customer1}
                  alt=""
                />
                <div className="font-semibold text-sm space-x-1 tracking-widest">
                  JUAN CARLOS
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="2xl"
                  style={{ color: "#2c541d" }}
                />
              </div>
              <p className="mb-5 font-normal text-textColor text-lg">
                Great user experience on your website. I found exactly what I
                was looking for at a great price. I will definitely be telling
                my friends.
              </p>
              <div>
                <img
                  loading="lazy"
                  className="h-10 rounded-full w-10 object-cover mb-5"
                  src={customer2}
                  alt=""
                />
                <div className="font-semibold text-sm space-x-1 tracking-widest">
                  JHON LEWIS
                </div>
              </div>
            </div>
            <div className="">
              <div className="mb-2">
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="2xl"
                  style={{ color: "#2c541d" }}
                />
              </div>
              <p className="mb-5 font-normal text-textColor text-lg">
                Thank you for the excellent shopping experience. It arrived
                quickly and was exactly as described. I will definitely be
                shopping with you again in the future.
              </p>
              <div>
                <img
                  loading="lazy"
                  className="h-10 rounded-full w-10 object-cover mb-5"
                  src={customer3}
                  alt=""
                />
                <div className="font-semibold text-sm space-x-1 tracking-widest">
                  DAVIS MILLER
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
