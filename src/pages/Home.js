import banner from "../assets/imgs/Banner.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section
      className="bg-no-repeat bg-scroll bg-cover w-full h-"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="flex justify-center items-center flex-col py-64 gap-4 ">
        <div>
          <h1 className="text-7xl text-globalcolorastglobalcolor1 tracking-wider font-semibold">
            EARTH
          </h1>
        </div>
        <div>
          <h2 className="text-black text-5xl font-light tracking-wider">
            MULTIPURPOSE STORE
          </h2>
        </div>
        <div>
          <button className="bg-globalcolorastglobalcolor2 border-globalcolorastglobalcolor2 px-12 py-2 hover:bg-globalcolorastglobalcolor1 transition-colors duration-300 mt-7 w-auto">
            <Link to={"/shop"} className="text-globalcolorastglobalcolor5">
              SHOP NOW
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
