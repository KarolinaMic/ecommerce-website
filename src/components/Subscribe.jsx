import React, { useState } from "react";

const BannerImg = {
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true); 
      setEmail(""); 
    } else {
      alert("Please enter a valid email"); 
    }
  };

  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-[#FBBF20] dark:bg-[#333480] text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get notified about new products
          </h1>

          {/* Kontener z flex dla inputa i buttona */}
          <div className="flex gap-2">
            {/* Pole do wpisania e-maila */}
            <input
              data-aos="fade-up"
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-black rounded-l-full"
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />

            {/* Przycisk subskrypcji */}
            <button
              onClick={handleSubscribe}
              className="bg-[#ff5f15] dark:bg-[#8f8f8f] hover:bg-[#424242] dark:hover:bg-[#363636]  text-white py-2 px-4 rounded-r-full"
            >
              Subscribe
            </button>
          </div>

          {/* Komunikat o subskrypcji */}
          {isSubscribed && (
            <p className="mt-4 text-center text-white font-semibold">
              Thank you! You have successfully subscribed!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
