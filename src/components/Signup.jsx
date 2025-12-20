import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Signup = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );

    // create user---->>

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        //save userinfo in database

        fetch("https://coffee-store-server-ten-fawn.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((result) => {
            console.log("after insert data :", result);
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "User SignUp Successful",
              showConfirmButton: false,
              timer: 1300,
            });
            navigate("/home");
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className=" bg-base-200 py-20 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-center  font-[rancho] text-[#331A15]">
          Create a Account
        </h1>
      </div>
      <div className="card  w-md  flex  items-center justify-center  shadow-xl">
        <div className="card-body w-full">
          <form onSubmit={handleSignUp}>
            <label className="label">Name</label>
            <input
              type="text"
              className="input w-full hover:border-[#c9a27b] input-bordered focus:outline-none"
              placeholder="Name"
              name="name"
            />
            <label className="label">Address</label>
            <input
              type="text"
              className="input w-full hover:border-[#c9a27b] input-bordered focus:outline-none"
              placeholder="Address"
              name="address"
            />
            <label className="label">Phone</label>
            <input
              type="text"
              className="input w-full hover:border-[#c9a27b] input-bordered focus:outline-none"
              placeholder="Phone"
              name="phone"
            />
            <label className="label">Photo</label>
            <input
              type="text"
              className="input w-full hover:border-[#c9a27b] input-bordered focus:outline-none"
              placeholder="Photo URL"
              name="photo"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input w-full hover:border-[#c9a27b] input-bordered focus:outline-none"
              placeholder="Email"
              name="email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input w-full  hover:border-[#c9a27b] input-bordered focus:outline-none "
              placeholder="Password"
              name="password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn bg-[#c9a27b] text-black font-semibold rounded hover:bg-[#b89268] mt-4">
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
