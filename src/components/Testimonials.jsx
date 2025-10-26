import React from "react";
import Slider from "react-slick";
import Test1 from "../assets/test1.jpg";
import Test2 from "../assets/test2.jpg";
import Test3 from "../assets/test3.jpg";
import Test4 from "../assets/test4.jpg";

const TestimonialData = [
  {
    id: 1,
    name: "Jack Black",
    text: "I recently bought a pair of shoes from this online store, and I couldn't be happier! The quality is outstanding, and they fit perfectly. The design is modern yet classic, which makes them suitable for both casual and semi-formal occasions. I highly recommend this store to anyone looking for stylish and durable footwear!",
    img: Test1,
  },
  {
    id: 2,
    name: "Ellie Ortega",
    text: "I purchased a dress from this store, and I am in love with it! The fabric feels so soft and luxurious, and the fit is perfect. I wore it to a special event, and I received so many compliments. I will definitely be shopping here again for more dresses!",
    img: Test2,
  },
  {
    id: 3,
    name: "Charlie Willow",
    text: "This shirt is absolutely amazing! The material is so comfortable and breathable, and it has a beautiful fit. I love how versatile it is – I can wear it to work or dress it down for the weekend. The quality exceeded my expectations, and I’m already eyeing a few other items from their collection.",
    img: Test3,
  },
  {
    id: 5,
    name: "Denise Richard",
    text: "I bought a pair of pants from this store, and I’m so impressed! They fit like a glove and are incredibly comfortable. The material is high-quality and stretches just enough to move with me. These pants are my new go-to, and I’m definitely coming back to get more in different colors!",
    img: Test4,
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="testimonials" className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">

          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">

          </p>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-700 bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                    <p className="text-xs" style={{ color: "#000000" }}>{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-[#8d8d8d] text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;