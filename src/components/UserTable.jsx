import React, { useContext, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../Contexts/AuthContext";

const UserTable = () => {
  const allUsers = useLoaderData();
  console.log(allUsers);
  const [users, setUsers] = useState(allUsers);
  const { deleteOneUser } = useContext(AuthContext);

  const handleDelete = (_id) => {
    fetch(`http://localhost:3000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        deleteOneUser();

        const remainingCoffees = users.filter((c) => c._id !== _id);
        setUsers(remainingCoffees);
      });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="overflow-x-auto py-20">
        <h1 className="text-center text-4xl font-bold mb-4 font-[rancho] text-[#331A15]">
          All Ambassador is here
        </h1>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Gmail</th>
              <th>Details</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => {
              return (
                <tr key={u._id}>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={u.photo} alt="Avatar" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{u.name}</div>
                        <div className="text-sm opacity-50">{}</div>
                      </div>
                    </div>
                  </td>

                  <td>
                    {u.email}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {u.lastSignInTime}
                    </span>
                  </td>

                  <td>{u.favoriteColor}</td>

                  <th>
                    <button
                      className="bg-[#E3B577] border-2 border-[#331A15] rounded-sm font-[rancho] px-3 py-1.5 mt-5"
                      onClick={() => handleDelete(u._id)}
                    >
                      {" "}
                      Delete user ?
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;
