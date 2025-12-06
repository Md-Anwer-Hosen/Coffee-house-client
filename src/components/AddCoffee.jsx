import React from "react";
import myImage from "../assets/more/11.png";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const addCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    //sent the server-->>

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            title: "Coffee added Successfully !",
            icon: "success",
            draggable: true,
          });
          // form.reset();
        }
      });
  };

  return (
    <div style={{ backgroundImage: `url(${myImage})` }} className="">
      <div className="  flex items-center justify-center px-4 py-10">
        <div className="max-w-5xl w-full bg-[#F4F3F0]  p-10 rounded-xl shadow">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center mb-3 font-[rancho]">
            Add New Coffee
          </h1>
          <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>

          {/* Form */}
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            onSubmit={addCoffee}
          >
            {/* Name */}
            <div>
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                placeholder="Enter coffee name"
                className="input input-bordered w-full bg-white"
                name="name"
              />
            </div>

            {/* Chef */}
            <div>
              <label className="block mb-1 font-semibold">Chef</label>
              <input
                type="text"
                placeholder="Enter coffee chef"
                className="input input-bordered w-full bg-white"
                name="chef"
              />
            </div>

            {/* Supplier */}
            <div>
              <label className="block mb-1 font-semibold">Supplier</label>
              <input
                type="text"
                placeholder="Enter coffee supplier"
                className="input input-bordered w-full bg-white"
                name="supplier"
              />
            </div>

            {/* Taste */}
            <div>
              <label className="block mb-1 font-semibold">Taste</label>
              <input
                type="text"
                placeholder="Enter coffee taste"
                className="input input-bordered w-full bg-white"
                name="taste"
              />
            </div>

            {/* Category */}
            <div>
              <label className="block mb-1 font-semibold">Category</label>
              <input
                type="text"
                placeholder="Enter coffee category"
                className="input input-bordered w-full bg-white"
                name="category"
              />
            </div>

            {/* Details */}
            <div>
              <label className="block mb-1 font-semibold">Details</label>
              <input
                type="text"
                placeholder="Enter coffee details"
                className="input input-bordered w-full bg-white"
                name="details"
              />
            </div>

            {/* Photo */}
            <div className="md:col-span-2">
              <label className="block mb-1 font-semibold">Photo</label>
              <input
                type="text"
                placeholder="Enter photo URL"
                className="input input-bordered w-full bg-white"
                name="photo"
              />
            </div>

            {/* Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="btn w-full bg-[#D2B48C] text-black border border-black hover:bg-[#b89268]"
              >
                Add Coffee
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
