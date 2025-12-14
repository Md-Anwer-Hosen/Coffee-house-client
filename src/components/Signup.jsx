import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const { email, password, ...userProfile } = Object.fromEntries(
      formData.entries()
    );

    // create user---->>

    createUser(email, password)
      .then((result) => {
        console.log(result);
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
