import React ,{useState}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { UpdateContact } from '../UserSlice/UserReducer';
function Update() {
    const {id}=useParams();
    const users = useSelector((state) => state.users);
    const createdUser=users.filter(a=>a.id==id);
    const {firstname,lastname,status}=createdUser[0];

    const[ufirstname,setUfirstname]=useState(firstname)
    const[ulastname,setUlastname]=useState(lastname)
    const[ustatus,setUstatus]=useState(status)

const dispatch=useDispatch()
const navigate=useNavigate();
    const handleUpdate =(e)=>{
        e.preventDefault();
        dispatch(UpdateContact({
            id:id,
            firstname:ufirstname,
            lastname:ulastname,
            status:ustatus
        }))
        navigate('/')
    }
   return (
    <div className="flex-1 ">
   
    <div className=" h-full w-full overflow-hidden flex items-center justify-center">
    
    <form  onSubmit={handleUpdate} className="w-full max-w-sm h-96 bg-blue-100 mt-20 mr-24 flex flex-col rounded">
    <h3 className="font-bold ml-2 text-blue-500 mt-2">Update Contact</h3>
      <div className="md:flex md:items-center mt-14 mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
           
          >
            First Name :
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-62 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            name="firstname"
            value={ufirstname}
            onChange={(e)=>setUfirstname(e.target.value)}
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4"
          
          >
            Last Name :
          </label>
        </div>
        <div className="md:w-2/3">
          <input
            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-62 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text"
            name="lastname"
            value={ulastname}
            onChange={(e)=>setUlastname(e.target.value)}
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            className="block text-gray-500  font-bold md:text-right mb-1 md:mb-0 pr-4"
            
          >
            Status :
          </label>
        </div>
        <div className="md:w-2/3 flex flex-col">
          <div>
            <input id="Active" name="selected" value={ustatus}  onChange={(e)=>setUstatus(e.target.value)}   type="radio" placeholder="Last Name" />

            <label className="ml-2" htmlFor="Active">Active</label>
          </div>

          <div>
            <input id="Inactive" type="radio" name="selected" value={ustatus}  onChange={(e)=>setUstatus(e.target.value)}  placeholder="Last Name" />
            <label className="ml-2" htmlFor="Inactive">Inactive</label>
          </div>
        </div>
      </div>

      <div className="md:flex md:items-center">
        <div className="md:w-1/3 "></div>
        <div className="md:w-2/3 mt-2">
          <button className="shadow bg-purple-500 hover:bg-purple-800 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
           Update
          </button>
        </div>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Update