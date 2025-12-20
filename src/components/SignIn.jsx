import React, { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import Swal from "sweetalert2";

const SignIn = () => {
  const { signInUser } = useContext(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signInUser(email, password)
      .then((result) => {
        console.log(result.user.metadata.lastSignInTime);

        const userInfo = {
          email: email,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        //update user information-->>

        fetch("http://localhost:3000/users", {
          method: "PATCH",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then((result) => console.log(result));

        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className=" bg-base-200 py-20 flex items-center justify-center flex-col">
      <div className="text-center mb-5">
        <h1 className="text-5xl font-bold text-center  font-[rancho] text-[#331A15]">
          Login now!
        </h1>
      </div>
      <div className="card  w-md  flex  items-center justify-center  shadow-xl">
        <div className="card-body w-full">
          <form onSubmit={handleSignIn}>
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
            <button
              className="btn bg-[#c9a27b] text-black font-semibold rounded hover:bg-[#b89268] mt-4"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
