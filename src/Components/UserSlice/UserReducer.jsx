import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "../Data/ConatactData";

const userSlice=createSlice({
    name:"users",
    initialState:ContactData,
    reducers:{
addUser:(state,action)=>{
    state.push(action.payload)
   
},
UpdateContact:(state,action)=>{
const {id,firstname,lastname,status}=action.payload;
const editContact=state.find(contact=>contact.id==id);
if(editContact){
    editContact.firstname=firstname;
    editContact.lastname=lastname;
    editContact.status=status;
}
},
deleteContact:(state,action)=>{
    const {id}=action.payload;
const DelContact=state.find(contact=>contact.id==id);
if(DelContact){
    return state.filter(d=>d.id!==id);
}
}
}
    
})


export const{addUser,UpdateContact,deleteContact}=userSlice.actions;
export default userSlice.reducer;