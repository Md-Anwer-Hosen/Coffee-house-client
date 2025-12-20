import React from "react";
import { FaEye, FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
const SingleProduct = ({ coffee, coffees, setCoffees }) => {
  const { _id, price, name, photo, category } = coffee;

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(result.isConfirmed);

        //delete process-->

        fetch(
          `https://coffee-store-server-ten-fawn.vercel.app/coffees/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              //update ui---->

              const remainingCoffees = coffees.filter((c) => c._id !== _id);
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="py-10 text-black  ">
        <div className=" bg-[#F5F4F1] shadow-sm P-4 flex items-center justify-center h-60">
          <figure className="h-40">
            <img
              src={photo || "https://i.ibb.co.com/rGfKP2xY/1.png"}
              alt="Movie"
            />
          </figure>
          <div className=" font-[Raleway]">
            <h2 className=" ">
              <span className="font-semibold font-sens">Name:</span>
              {name}{" "}
            </h2>
            <h2 className="">
              <span className="font-semibold font-sens">Category:</span>
              {category}{" "}
            </h2>
            <h2 className="">
              <span className="font-semibold font-sens">Price:</span>
              {price}{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-3 mr-5 ml-2">
            <Link
              className="p-2 flex items-center gap-2 bg-[#E3B577] rounded-sm w-fit"
              to={`/coffees/${_id}`}
            >
              <FaEye />
            </Link>

            <Link
              className="p-2  flex items-center gap-2 bg-emerald-400 rounded-sm w-fit"
              to={`/updateCoffee/${_id}`}
            >
              {" "}
              <FaPen />{" "}
            </Link>

            <button
              onClick={() => handleDelete(_id)}
              className="p-2  flex items-center gap-2 bg-red-500 rounded-sm w-fit"
            >
              <FaTrash />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
