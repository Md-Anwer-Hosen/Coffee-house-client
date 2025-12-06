import React from "react";
import bg_Image from "../assets/more/13.jpg";
import bg_image2 from "../assets/more/24.jpg";
import logo from "../assets/more/logo1.png";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import {
  AiOutlinePhone,
  AiOutlineMail,
  AiOutlineEnvironment,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer
        style={{ backgroundImage: `url(${bg_Image})` }}
        className=" py-10 px-5"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          <img src={logo} alt="Logo" className="w-10 h-10 mr-2" />
        </div>
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Left Section */}
          <div>
            <div className="flex items-center mb-4">
              <h2 className="text-4xl font-bold font-[rancho]">
                Espresso Emporium
              </h2>
            </div>
            <p className="text-gray-700 mb-4">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-3 mb-4 text-gray-700">
              <FaFacebookF className="w-6 h-6 cursor-pointer text-[#331A15] hover:text-[#c9a27b]" />
              <FaTwitter className="w-6 h-6 cursor-pointer text-[#331A15] hover:text-[#c9a27b]" />
              <FaInstagram className="w-6 h-6 cursor-pointer text-[#331A15] hover:text-[#c9a27b]" />
              <FaLinkedin className="w-6 h-6 cursor-pointer text-[#331A15] hover:text-[#c9a27b]" />
            </div>
            {/* Contact Info */}
            <div className="text-gray-700 space-y-2">
              <h2 className="text-4xl font-bold font-[rancho]">Get in touch</h2>

              <p className="flex items-center">
                <AiOutlinePhone className="mr-2" /> +88 01706027955
              </p>
              <p className="flex items-center">
                <AiOutlineMail className="mr-2" /> nur.cnits@gmail.com
              </p>
              <p className="flex items-center">
                <AiOutlineEnvironment className="mr-2" /> Daffodil Smart City,
                Savar, Dhaka
              </p>
            </div>
          </div>

          {/* Right Section (Contact Form) */}
          <div>
            <h3 className="text-4xl font-bold mb-4 font-[rancho]">
              Connect with Us
            </h3>
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded"
              />
              <textarea
                placeholder="Message"
                rows="3"
                className="w-full p-2 border border-gray-300 rounded"
              ></textarea>
              <button
                type="submit"
                className="px-5 py-2 bg-[#c9a27b] text-black font-semibold rounded hover:bg-[#b89268]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
      </footer>
      <div
        style={{ backgroundImage: `url(${bg_image2})` }}
        className=" flex items-center justify-center text-center h-15 text-white"
      >
        2025 Espresso Emporium | All Rights Reserved
      </div>
    </>
  );
};

export default Footer;
