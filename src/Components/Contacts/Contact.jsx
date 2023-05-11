import React from "react";
import { useSelector } from "react-redux";
function Contact() {
  const users = useSelector((state) => state.users);
  console.log(users);
  return (
    <div className="flex flex-1 flex-col items-center   bg-gray-200">
      <div className="-my-2  mt-12 w-full sm:-mx-6 lg:-mx-8">
        <div className="  align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <button class="bg-blue-500 hover:bg-blue-700 mb-12 text-white font-bold py-1 px-4 border border-blue-700 rounded">
            Create Contact
          </button>
          <div className="shadow mr-5 overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
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
                    className="px-20 py-3  text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {users.map((data) => (
                  <tr key={data.id}>
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
                        className="px-2 inline-flex text-xs leading-5
                    font-semibold rounded-full bg-green-100 text-green-800"
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
                        <button className="bg-indigo-500 rounded p-1 text-white hover:bg-indigo-800"> Edit</button>
                         
                        </a>
                      </span>
                      <span>
                        <a
                          href="#"
                          className="text-red-600 ml-4 hover:text-indigo-900"
                        >
                         <button className="bg-red-500 rounded p-1 text-white hover:bg-red-700">Delete</button> 
                        </a>
                      </span>
                      <span>
                        <a
                          href="#"
                          className="text-purple-600 ml-4 hover:text-indigo-900"
                        >
                         <button className="bg-yellow-400 rounded p-1 text-white hover:bg-yellow-600">View</button>
                        </a>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
