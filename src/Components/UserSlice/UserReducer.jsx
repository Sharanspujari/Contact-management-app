import { createSlice } from "@reduxjs/toolkit";
import { ContactData } from "../Data/ConatactData";

const userSlice=createSlice({
    name:"users",
    initialState:ContactData,
    reducers:{

    }
})
export default userSlice.reducer;