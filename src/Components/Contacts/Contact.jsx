import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteContact } from "../UserSlice/UserReducer";
function Contact() {
  const users = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteContact({ id: id }));
  };
  return (
    <div className="flex   w-full mr-16 h-screen ">
      <div className="-my-2 mr-8 w-full sm:-mx-6 lg:-mx-8">
        <div className="  align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <Link to="/create">
            <button class="bg-blue-500 hover:bg-blue-700 mb-12 text-white font-bold py-1 px-4 border border-blue-700 rounded">
              Create Contact
            </button>
          </Link>
          <div className="shadow mr-5 overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    ID
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    First Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Last Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-12 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users != null ? (
                  users.map((data) => (
                    <tr key={data.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {data.id}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-2">
                            <div className="text-sm font-medium text-gray-900">
                              {data.firstname}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {data.lastname}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`x-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 p-1 ${data.status==='active' ? 'text-green-600' :'text-red-600'} `}
                        >
                          {data.status}
                        </span>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap  text-left text-sm font-medium">
                        <span>
                          <a
                            href="#"
                            className="text-indigo-600   hover:text-indigo-900"
                          >
                            <Link to={`/edit/${data.id}`}>
                              <button className="bg-indigo-500 rounded p-1 text-white hover:bg-indigo-800">
                                {" "}
                                Edit
                              </button>
                            </Link>
                          </a>
                        </span>
                        <span>
                          <a
                            href="#"
                            className="text-red-600 ml-4 hover:text-indigo-900"
                          >
                            <button
                              onClick={() => handleDelete(data.id)}
                              className="bg-red-500 rounded p-1 text-white hover:bg-red-700"
                            >
                              Delete
                            </button>
                          </a>
                        </span>
                        <span>
                          <a
                            href="#"
                            className="text-purple-600 ml-4 hover:text-indigo-900"
                          >
                           
                          </a>
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <td>
                    No Contact found please add contact from create conatact
                    button
                  </td>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
