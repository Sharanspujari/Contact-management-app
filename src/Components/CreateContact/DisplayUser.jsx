import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ShowContact } from "../UserSlice/UserReducer";
function DisplayUser() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const createdUsers = users.filter((a) => a.id == id);
  const { firstname, lastname, status } = createdUsers[0];
  console.log(firstname, lastname, status);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  dispatch(
    ShowContact({
      id,
      firstname,
      lastname,
      status,
    })
  );

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="shadow bg-purple-500 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      >
        Contact List
      </button>
      <div className="block rounded-lg mt-4 bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          First Name: {firstname}
        </h5>
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Last Name: {lastname}
        </h5>
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          Status: {status}
        </h5>
      </div>
    </>
  );
}

export default DisplayUser;
