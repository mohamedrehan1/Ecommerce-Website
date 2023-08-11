import React from "react";
import banner from "../assets/imgs/About-banner.jpg";
import mission from "../assets/imgs/About-Our-Mission-min.jpg";
import talkToUs from "../assets/imgs/About-Talk-to-us.jpg";

const About = () => {
  return (
    <>
      <section
        className="bg-no-repeat bg-scroll bg-cover w-full bg-[center_bottom]"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="flex justify-center items-center py-[120px] md:py-[150px] lg:py-[250px] gap-4 ">
          <h1 className=" text-4xl md:text-5xl lg:text-7xl text-globalcolor1 tracking-[3px] md:tracking-[8.5px] font-medium text-center">
            WHO ARE WE?
          </h1>
        </div>
      </section>
      <section className="container my-14 lg:my-32 mx-auto">
        <div className="w-full flex flex-col gap-3 lg:gap-7 md:flex-row md:justify-between md:items-center">
          <div className="md:w-[50%] mb-4 md:mb-0">
            <img src={mission} alt="" />
          </div>
          <div className="md:w-[50%] px-0 md:px-5 lg:p-12">
            <h2 className="font-medium text-4xl mb-5">OUR MISSION</h2>
            <p className="text-textColor text-[16px] lg:text-lg mb-7 lg:text-justify">
              Hello, my name is Tyler Moore and with the help of many people I
              made this template. I made it so it is super easy to update and so
              that it flows perfectly with my tutorials. Lots of love and
              hundreds of hours went into making it. I hope you love it as much
              as I do.
            </p>
            <p className="text-textColor text-[16px] lg:text-lg lg:text-justify">
              I wish you the best of luck with your business, enjoy the
              adventure.
            </p>
          </div>
        </div>
      </section>
      <section
        className="bg-no-repeat bg-scroll bg-cover w-full bg-[center_bottom] py-20 px-5 md:py-28 my-14"
        style={{ backgroundImage: `url(${talkToUs})` }}
      >
        <div className="flex justify-center items-center flex-col gap-4 ">
          <h2 className="text-center text-black text-3xl md:text-4xl lg:text-5xl font-medium tracking-wider">
            GIVE THE GIFT OF A POSTCARD
          </h2>
          <p className="text-textColor text-[16px] lg:text-lg text-center">
            Give the gift of a lasting memory with a postcard
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
