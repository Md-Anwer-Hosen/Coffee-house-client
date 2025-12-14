import React from "react";
import { useLoaderData } from "react-router-dom";
import bgImage from "../assets/more/11.png";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { category, details, name, photo, supplier, taste } = data;

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex items-center justify-center py-32 max-w-7xl mx-auto">
          <div className="bg-[#F4F3F0] shadow-sm rounded-md flex flex-col md:flex-row w-7xl h-[500px] justify-around">
            <div className=" flex items-center justify-center p-4 ">
              <img
                src={
                  photo ||
                  "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                }
                alt={name}
                className="h-8/12"
              />
            </div>

            {/* Coffee Details */}
            <div className=" items-center justify-center text-left flex flex-col">
              <h1 className="text-2xl font-bold text-[#331A15] mb-4">
                Niceties
              </h1>
              <div className="text-gray-700 space-y-2">
                <h1 className="font-semibold">{name}</h1>
                <p className="font-[raleway]">
                  <span className="font-semibold font-[raleway]">
                    Supplier:
                  </span>{" "}
                  {supplier}
                </p>
                <p className="font-[raleway]">
                  <span className="font-semibold font-[raleway]">Taste:</span>{" "}
                  {taste}
                </p>
                <p className="font-[raleway]">
                  <span className="font-semibold font-[raleway]">
                    Category:
                  </span>{" "}
                  {category}
                </p>
                <p className="font-[raleway]">
                  <span className="font-semibold font-[raleway]">Details:</span>{" "}
                  {details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoffeeDetails;
