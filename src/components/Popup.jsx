import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-end">
              {!isSubmitted && <h1>Order Now</h1>}
              <IoCloseOutline
                className="text-2xl cursor-pointer"
                onClick={() => {
                  setOrderPopup(false);
                  setIsSubmitted(false);
                }}
                />
                 </div>
              {/* content */}
              <div className="mt-4">
                {isSubmitted ? (
                  <p className="text-center text-black font-semibold">
                    Thank you for your order! <br/> We're happy to have you as our customer.
                  </p>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                      required
                    />
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full"
                      >
                        Order Now
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
