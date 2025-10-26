import React from "react";
import BannerImg from "../assets/logo5.png";
import BannerImg2 from "../assets/logo7.png";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div id="about-us" className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* image section */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover dark:hidden"
            />
            <img
              src={BannerImg2}
              alt=""
              className="max-w-[400px] h-[350px] w-full mx-auto object-cover hidden dark:block"
            />
          </div>

          {/* text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold md:mt-12 lg:mt-0">
              Discover the Perfect Blend of Quality
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5 text-justify"
            >
              At our store, we believe that fashion should never compromise on
              quality. We offer a curated selection of clothing crafted from the
              finest materials, ensuring that every piece not only looks great but
              feels exceptional. From luxurious fabrics to impeccable craftsmanship,
              our collection is designed to elevate your wardrobe with timeless pieces
              that stand the test of time. Shop with us and experience the best in
              style, comfort, and durability. In our shop you have:
            </p>

            <div className="flex flex-col gap-4">
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#c4c4c4] dark:bg-[#c4c4c4]" />
                <p>Quality Products</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#c4c4c4] dark:bg-[#c4c4c4]" />
                <p>Fast Delivery</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#c4c4c4] dark:bg-[#c4c4c4]" />
                <p>Easy Payment method</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4 md:mb-12 lg:mb-0">
             <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-[#c4c4c4] dark:bg-[#c4c4c4]" />
             <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
