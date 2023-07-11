import logo from "../assets/imgs/EARTH-STORE-300x53.png";

const Navbar = () => {
  return (
    <div className="absolute left-0 right-0">
      <div className="flex flex-row items-center justify-between px-10">
        <img src={logo} alt="" />
        <div className="flex flex-row items-center justify-between">
          <div className="px-5 h-20 flex items-center">HOME</div>
          <div className="px-5 h-20 flex items-center">ABOUT</div>
          <div cclassName="px-5 h-20 flex items-center">SHOP</div>
          <div className="px-5 h-20 flex items-center">CONTACT</div>
          <div className="px-5 h-20 flex items-center"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
