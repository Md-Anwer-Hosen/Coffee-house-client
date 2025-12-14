import { Link, useLoaderData } from "react-router";
import SingleProduct from "./SingleProduct";
import bgImage from "../assets/more/1.png";
import { useState } from "react";

const OurProduct = () => {
  const initialCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(initialCoffees);

  return (
    <div
      className="max-w-7xl mx-auto py-10"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="items-center justify-center flex flex-col ">
        <h3 className="font-[raleway] text-black">--- Sip & Savor ---</h3>
        <h1 className="text-4xl font-bold font-[rancho] mt-5 text-[#331A15]">
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
            <SingleProduct
              key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
