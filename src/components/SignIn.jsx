import React from "react";

const SignIn = () => {
  return (
    <div className=" bg-base-200 py-20 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-center  font-[rancho] text-[#331A15]">
          Login now!
        </h1>
      </div>
      <div className="card  w-md  flex  items-center justify-center  shadow-xl">
        <div className="card-body w-full">
          <fieldset className="fieldset  ">
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
              Login
            </button>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
