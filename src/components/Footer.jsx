import React from "react";
import footerLogoLight from "../assets/logo4.png";
import footerLogoDark from "../assets/logo6.png";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  /* backgroundImage: `url(${Banner})`,*/
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#home",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white bg-[#bdbdbd] dark:bg-black">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-10 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 text-[#ff5f15] dark:text-[#343691]">
              <img
                src={footerLogoLight}
                alt="Logo"
                className="max-w-[50px] dark:hidden"
              />
              <img
                src={footerLogoDark}
                alt="Logo Dark"
                className="max-w-[50px] hidden dark:block"
              />
              Wearly
            </h1>
            <p>
              Wearly is an online clothing store offering a wide range of high-quality apparel for men, women, and children. Each piece in our collection is crafted with attention to detail and designed to provide comfort, durability, and style. Whether you're looking for casual wear, elegant outfits, or trendy accessories, we have something for every occasion. At Wearly, we prioritize the use of premium fabrics to ensure that every item not only looks great but feels exceptional. Our collection is made to last, making it the perfect choice for fashion-conscious individuals and families who value quality and timeless designs.
            </p>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 flex whitespace-nowrap">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-[#ff5f15] dark:hover:text-[#343691] hover:translate-x-1 duration-300 text-gray-200"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              {/* Empty section */}
            </div>

            {/* social links */}
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#instagram">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#facebook">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#linkedin">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-right gap-3">
                  <FaLocationArrow />
                  <p>
                    Wearly London Branch
                    <br />
                    123 Fashion Street
                    <br />
                    London, W1B 2QZ
                    <br />
                    United Kingdom
                  </p>
                </div>
                <div className="flex items-right gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+44 20 7946 0850</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
