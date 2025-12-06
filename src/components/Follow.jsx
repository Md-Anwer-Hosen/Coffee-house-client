import React from "react";
import image1 from "../assets/cups/Rectangle 10.png";
import image2 from "../assets/cups/Rectangle 11.png";
import image3 from "../assets/cups/Rectangle 12.png";
import image4 from "../assets/cups/Rectangle 13.png";
import image5 from "../assets/cups/Rectangle 14.png";
import image6 from "../assets/cups/Rectangle 15.png";
import image7 from "../assets/cups/Rectangle 16.png";
import image8 from "../assets/cups/Rectangle 9.png";

const Follow = () => {
  return (
    // Changed 'class' to 'className'
    <div className="bg-white py-15 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-6xl mx-auto">
        {/* Header Text */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Follow Us Now
          </p>
          <h2 className="text-5xl  text-gray-800 mt-2 font-[Rancho]">
            Follow on Instagram
          </h2>
        </div>

        {/* Instagram Image Grid (Manually Written) */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-6">
          {/* Grid Item 1 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image1}
              alt="Instagram Coffee Image Placeholder 1"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 2 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image2}
              alt="Instagram Coffee Image Placeholder 2"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 3 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image3}
              alt="Instagram Coffee Image Placeholder 3"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 4 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image4}
              alt="Instagram Coffee Image Placeholder 4"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 5 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image5}
              alt="Instagram Coffee Image Placeholder 5"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 6 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image6}
              alt="Instagram Coffee Image Placeholder 6"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 7 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image7}
              alt="Instagram Coffee Image Placeholder 7"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Grid Item 8 */}
          <div className="aspect-square overflow-hidden bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <img
              src={image8}
              alt="Instagram Coffee Image Placeholder 8"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Follow;
