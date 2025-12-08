import React from "react";
import heroImage from "../assets/more/3.png";
import icon1 from "../assets/icons/1.png";
import icon2 from "../assets/icons/2.png";
import icon3 from "../assets/icons/3.png";
import icon4 from "../assets/icons/4.png";

const Hero = () => {
  return (
    <>
      <div>
        <div
          style={{ backgroundImage: `url(${heroImage})` }}
          className="w-full h-[800px]  bg-cover bg-center bg-no-repeat flex items-center justify-end"
        >
          <div className="flex flex-col w-6/12 justify-start">
            <h1 className="font-[Rancho] text-white text-6xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="text-white mt-5">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of <br /> every moment!!! Enjoy
              the beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] border-[#331A15] rounded-sm font-[rancho] px-3 py-1.5 mt-5 w-fit">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* details section */}

      <div>
        <div className="bg-[#ECEAE3] py-12 ">
          <div
            className="max-w-5xl mx-auto px-4 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
        gap-10 text-center"
          >
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 mb-2">
                <img src={icon1} alt="" />
              </div>

              <h3 className="font-bold text-xl text-[#4B2E23]">
                Awesome Aroma
              </h3>
              <p className="text-[#6B4F4F] text-sm">
                You will definitely be a fan of the design & aroma of your
                coffee
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 mb-2">
                {" "}
                <img src={icon2} alt="" />
              </div>

              <h3 className="font-bold text-xl text-[#4B2E23]">High Quality</h3>
              <p className="text-[#6B4F4F] text-sm">
                We served the coffee to you maintaining the best quality
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 mb-2">
                {" "}
                <img src={icon3} alt="" />
              </div>

              <h3 className="font-bold text-xl text-[#4B2E23]">Pure Grades</h3>
              <p className="text-[#6B4F4F] text-sm">
                The coffee is made of the green coffee beans which you will love
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 mb-2">
                {" "}
                <img src={icon4} alt="" />
              </div>

              <h3 className="font-bold text-xl text-[#4B2E23]">
                Proper Roasting
              </h3>
              <p className="text-[#6B4F4F] text-sm">
                Your coffee is brewed by first roasting the green coffee beans
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
