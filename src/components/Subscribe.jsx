import React from "react";


const BannerImg = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-[#FBBF20] dark:bg-gray-800 text-white "
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get notified about new products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;

/*
backgroundImage: `url(${Banner})`,
backgroundSize: "cover",*/