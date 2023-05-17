import React, { useState } from "react";
import { addUser } from "../UserSlice/UserReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function Create() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        firstname,
        lastname,
        status,
      })
    );
  
    navigate("/");
  };

  return (
    <div className="flex-1 
    xl:h-3/4   ">
      <div className=" h-full w-full  ml-32 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="w-full mr-32 mt-20  max-w-sm h-96 bg-blue-100 flex flex-col rounded"
        >
          <h3 className="font-bold ml-5 text-blue-500 mt-2">
            Create New Contact
          </h3>
          <div className="md:flex  md:items-center mt-14 mb-6 ml-4">
            <div className="md:w-1/3">
              <label className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4">
                First Name :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-62 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="firstname"
                onChange={(e) => setFirstname(e.target.value)}
                placeholder="First Name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center ml-4 mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4">
                Last Name :
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-62 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                name="lastname"
                onChange={(e) => setLastname(e.target.value)}
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="md:flex md:items-center ml-4 mb-6">
            <div className="md:w-1/3">
              <label className="block text-gray-500    font-bold md:text-right mb-1 md:mb-0 pr-4">
                Status :
              </label>
            </div>
            <div className="md:w-2/3 flex flex-col">
              <div>
                <input
                  id="Active"
                  name="selected"
                  value="active"
                  checked={status === "active"}
                  onChange={(e) => setStatus(e.target.value)}
                  type="radio"
                  placeholder="Last Name"
                />

                <label className="ml-2" htmlFor="Active">
                  Active
                </label>
              </div>

              <div>
                <input
                  id="Inactive"
                  type="radio"
                  name="selected"
                  value="inactive"
                  checked={status === "inactive"}
                  onChange={(e) => setStatus(e.target.value)}
                  placeholder="Last Name"
                />
                <label className="ml-2" htmlFor="Inactive">
                  Inactive
                </label>
              </div>
            </div>
          </div>

          <div className="md:flex md:items-center 2xl:ml-6 sm:h-2/3">
            <div className="md:w-1/3 "></div>
            <div className="md:w-2/3 mt-2">
              <button className="shadow bg-purple-500 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                Create Contact
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
