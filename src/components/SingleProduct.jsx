import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
const SingleProduct = ({ coffee }) => {
  return (
    <div>
      <div className="py-10   ">
        <div className=" bg-[#F5F4F1] shadow-sm P-10 flex items-center justify-center h-60">
          <figure className="h-40">
            <img src={coffee.photo} alt="Movie" />
          </figure>
          <div className=" font-sens">
            <h2 className=" ">
              <span className="font-semibold font-sens">Name:</span>
              {coffee.name}{" "}
            </h2>
            <h2 className="">
              <span className="font-semibold font-sens">Category:</span>
              {coffee.category}{" "}
            </h2>
            <h2 className="">
              <span className="font-semibold font-sens">Price:</span>
              {coffee.price}{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-3 mr-5 ml-2">
            <button className="p-2 flex items-center gap-2 bg-[#E3B577] rounded-sm w-fit">
              <FaEye />
            </button>

            <button className="p-2  flex items-center gap-2 bg-emerald-400 rounded-sm w-fit">
              <FaPen />
            </button>

            <button className="p-2  flex items-center gap-2 bg-red-600 rounded-sm w-fit">
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
