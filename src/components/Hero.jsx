import React from "react";
import Image1 from "../assets/grafika1.png";
import Image2 from "../assets/grafika2.png";
import Image3 from "../assets/grafika3.png";
import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Spring Into Style – 50% Off Women’s Fashion!",
    description:
      "Refresh your wardrobe with our exclusive spring sale! Enjoy 50% off on all women’s clothing – from light jackets to floral dresses. Step into the new season looking and feeling your best. Hurry, limited time only!",
  },
  {
    id: 2,
    img: Image2,
    title: "New Men's Collection Has Arrived!",
    description:
      "Discover the latest trends in men’s fashion – sleek styles, modern fits, and must-have pieces for the season. Elevate your look with our brand-new arrivals!",
  },
  {
    id: 3,
    img: Image3,
    title: "Shop With Purpose – Support Children's Education",
    description:
      "A portion of every purchase goes toward funding education for children in need. Together, we can make a difference – one order at a time.",
  },
];

const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
  <div className="h-[700px] w-[700px] bg-[#ffab85] dark:bg-[#4b4b4b] absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={handleOrderPopup}
                      className="bg-[#FBBF20] dark:bg-[#343691] hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
<div className="order-1 sm:order-2">
  <div
    data-aos="zoom-in"
    data-aos-once="true"
    className="relative z-10 m-0 p-0"
  >
    <img
      src={data.img}
      alt=""
      className="w-full max-w-[600px] h-auto sm:max-w-[700px] sm:h-[700px] object-contain mx-auto"
    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;