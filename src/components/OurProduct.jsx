import React from "react";
import { Link, useLoaderData } from "react-router";
import SingleProduct from "./SingleProduct";

const OurProduct = () => {
  const coffees = useLoaderData();
  console.log(coffees);
  return (
    <div className="max-w-7xl mx-auto py-10">
      <div className="items-center justify-center flex flex-col ">
        <h3>--- Sip & Savor ---</h3>
        <h1 className="text-4xl font-bold font-[rancho] mt-5">
          Our Popular Products
        </h1>
        <Link
          className="bg-[#E3B577] border-2 border-[#331A15] rounded-sm font-[rancho] px-3 py-1.5 mt-5"
          to={"/addCoffee"}
        >
          Add Coffee
        </Link>

        {/* all coffees */}

        <div className="grid grid-cols-3 gap-5">
          {coffees.map((coffee) => (
            <SingleProduct key={coffee._id} coffee={coffee}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
