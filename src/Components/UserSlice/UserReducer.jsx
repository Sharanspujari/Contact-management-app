import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "../Data/ConatactData";

const userSlice=createSlice({
    name:"users",
    initialState:ContactData,
    reducers:{
   addUser:(state,action)=>{
    state.push(action.payload)
    console.log(action)
}
    }
})


export const{addUser}=userSlice.actions;
export default userSlice.reducer;