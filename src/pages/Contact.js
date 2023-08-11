import React, { useState } from "react";
import banner from "../assets/imgs/Contact-Banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Contact = () => {
  const [showThankMessage, setShowThankMessage] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setShowThankMessage(true);
  };

  return (
    <>
      <section
        className="bg-no-repeat bg-scroll bg-[center_bottom] bg-cover w-full"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex justify-center items-center flex-col py-[120px] md:py-[150px] lg:py-[250px] gap-4 ">
          <h1 className="text-center text-4xl md:text-5xl lg:text-7xl text-globalcolor1 tracking-wider font-medium">
            CONTACT US
          </h1>
        </div>
      </section>
      <section className="container my-14 lg:my-32 mx-auto">
        <div className="w-full flex flex-col gap-16 md:gap-5 lg:gap-16 md:flex-row md:justify-between md:items-start">
          <div className="md:w-[50%] mb-4 md:mb-0">
            <h2 className="text-center md:text-left font-medium text-3xl md:text-4xl mb-9">
              Get In Touch
            </h2>
            {showThankMessage ? (
              <p className="p-[30px] lg:p-14 shadow-[0_4px_51px_0_rgba(0,0,0,.0392156862745098)] text-textColor text-lg">
                Thanks for contacting us! We will be in touch with you shortly.
              </p>
            ) : (
              <form
                onSubmit={submitHandler}
                className="p-[30px] lg:p-14 shadow-[0_4px_51px_0_rgba(0,0,0,.0392156862745098)]"
              >
                <input
                  className="w-full mb-5 p-3 block text-[#666] border border-borderColor2 outline-0 rounded-sm bg-[#fafafa]"
                  type="text"
                  placeholder="Full Name"
                  required
                />
                <input
                  className="w-full mb-5 p-3 block text-[#666] border border-borderColor2 outline-0 rounded-sm bg-[#fafafa]"
                  type="tel"
                  pattern="\d*"
                  minLength={5}
                  placeholder="Phone Number"
                  required
                />
                <input
                  className="w-full mb-5 p-3 block text-[#666] border border-borderColor2 outline-0 rounded-sm bg-[#fafafa]"
                  type="email"
                  placeholder="Email"
                  required
                />
                <textarea
                  className="resize-none w-full p-3 block text-[#666] border border-borderColor2 outline-0 rounded-sm bg-[#fafafa]"
                  type="text"
                  name=""
                  id=""
                  cols="30"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="mb-[26px] text-white mr-auto bg-globalcolor2 tracking-widest px-6 py-3 hover:bg-globalcolor1 transition-colors duration-300 mt-7 w-auto"
                >
                  SEND NOW
                </button>
              </form>
            )}
          </div>
          <div className="flex flex-col gap-10 md:w-[50%] px-0 md:px-5 text-center">
            <h2 className="text-center md:text-left font-medium text-4xl mb-5">
              Talk To Us
            </h2>
            <div className="flex flex-col items-start md:flex-row">
              <FontAwesomeIcon
                className="md:mr-4 w-5 h-5 mb-6 border border-globalcolor2 rounded-full p-3"
                icon={faEnvelope}
                size="lg"
                style={{ color: "#74a84a" }}
              />
              <div className="flex flex-col items-start">
                <h3 className="text-textColor text-base">EMAIL</h3>
                <p className="text-globalcolor1 text-[22px] break-all text-left">
                  mohamedrehan54321@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start md:flex-row">
              <FontAwesomeIcon
                className="md:mr-4 w-5 h-5 mb-6 border border-globalcolor2 rounded-full p-3"
                icon={faPhone}
                size="lg"
                style={{ color: "#74a84a" }}
              />
              <div className="flex flex-col items-start">
                <h3 className="text-textColor text-base">PHONE NUMBER</h3>
                <p className="text-globalcolor1 text-[22px]">+201065680362</p>
              </div>
            </div>
            <div className="flex flex-col items-start md:flex-row">
              <FontAwesomeIcon
                className="md:mr-4 w-5 h-5 mb-6 border border-globalcolor2 rounded-full p-3"
                icon={faLocationDot}
                size="lg"
                style={{ color: "#74a84a" }}
              />
              <div className="flex flex-col items-start">
                <h3 className="text-textColor text-base">ADDRESS</h3>
                <p className="text-globalcolor1 text-[22px]">Cairo, Egypt</p>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-medium mb-5">Follow Us:</h4>
              <div className="flex flex-row justify-center items-center gap-[10px]">
                <Link to={"https://twitter.com/mohamedrehan54"}>
                  <div className="w-10 h-10 border bg-globalcolor2 rounded-full p-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.25em"
                      viewBox="0 0 512 512"
                      className="fill-white"
                    >
                      <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
                    </svg>
                  </div>
                </Link>
                <Link
                  to={"https://www.linkedin.com/in/mohamed-rehan-17bb8419b/"}
                >
                  <div className="w-10 h-10 border bg-globalcolor2 rounded-full p-3 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="1.25em"
                      viewBox="0 0 448 512"
                      className=" fill-white"
                    >
                      <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                    </svg>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
