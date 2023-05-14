import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { IoMdContact, TiChartLine ,RxCross2} from "react-icons/all";
import NavContext from "../sideContext/navContext";


function Sidebar() {


// className={`x-2 inline-flex text-xs leading-5
// font-semibold rounded-full bg-green-100 p-1 ${data.status==='active' ? 'text-green-600' :'text-red-600'} `}
//     >
const { sidebar, setSidebar } = useContext(NavContext);

  return (

   
      <div className={` ${sidebar ? 'hidden':'w-42 bg-blue-800 h-screen fixed top-12 p-0 flex flex-1'}   `}>
        
      
        <ul className="p-2 flex flex-col items-center justify-items-center">

          <Link className="flex  ml-2 justify-center items-center " to="/">
            <li className="flex  hover:bg-gray-800 rounded p-2  w-40 m-5 items-center text-white">
              <IoMdContact className="mr-4" />
              Contact
            </li>
          </Link>

          <Link
            className="flex  justify-center items-center"
            to="/charts_and_maps"
          >
            <li className="flex   hover:bg-gray-800  w-43 rounded items-center text-white">
              <TiChartLine className="m-3" />
              Charts And Maps
            </li>
          </Link>
        </ul>
      </div>
   
  );
}

export default Sidebar;
