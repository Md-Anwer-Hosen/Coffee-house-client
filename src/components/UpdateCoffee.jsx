import React from "react";
import myImage from "../assets/more/11.png";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const data = useLoaderData();
  console.log(data);

  const { _id, price, name, photo, category, details, supplier, taste } = data;

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedCoffee = Object.fromEntries(formData.entries());

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-ten-fawn.vercel.app/coffees/${_id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(updatedCoffee),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire(
                "Updated!",
                "Coffee info updated successfully",
                "success"
              );
            } else {
              Swal.fire("No Changes!", "Nothing was modified", "info");
            }
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <div>
      <div style={{ backgroundImage: `url(${myImage})` }} className="">
        <div className="  flex items-center justify-center px-4 py-10">
          <div className="max-w-5xl w-full bg-[#F4F3F0]  p-10 rounded-xl shadow">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-center mb-3 font-[rancho]">
              Update Existing Coffee Details
            </h1>
            <p className="text-center text-gray-700 max-w-2xl mx-auto mb-10">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>

            {/* Form */}
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleUpdateCoffee}
            >
              {/* Name */}
              <div>
                <label className="block mb-1 font-semibold">Name</label>
                <input
                  type="text"
                  placeholder="Enter coffee name"
                  className="input input-bordered w-full bg-white"
                  name="name"
                  defaultValue={name}
                />
              </div>

              {/* Chef */}
              <div>
                <label className="block mb-1 font-semibold">Price</label>
                <input
                  type="text"
                  placeholder="Enter coffee chef"
                  className="input input-bordered w-full bg-white"
                  name="price"
                  defaultValue={price}
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
                  defaultValue={supplier}
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
                  defaultValue={taste}
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
                  defaultValue={category}
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
                  defaultValue={details}
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
                  defaultValue={photo}
                />
              </div>

              {/* Button */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="btn w-full bg-[#D2B48C] text-black border border-black hover:bg-[#b89268]"
                >
                  Update Coffee Details
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
