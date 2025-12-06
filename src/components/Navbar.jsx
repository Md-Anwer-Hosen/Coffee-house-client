import React from "react";
import bg_image from "../assets/more/15.jpg";
import logo from "../assets/more/logo1.png";

const Navbar = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bg_image})` }}
      className=" w-full bg-cover object-cover bg-center h-20 flex items-center justify-center"
    >
      <h1 className="text-white">
        <div className="flex items-center justify-center gap-5">
          <img src={logo} alt="" className="h-20" />
          <h1 className="font-[rancho] text-6xl">Espresso Emporium</h1>
        </div>
      </h1>
    </div>
  );
};

export default Navbar;
