import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "../store";
import axios from "@/lib/axios";
import { API_URL } from "@/constant/apiUrl";
import { initialUser } from "@/types/userTypes.interface";


const userSlice = createSlice({
    name: "userSlice",
    initialState: initialUser,
    reducers: {
        setLoading(state, { payload }) {
            state.loading = payload
        },
        setUser(state, { payload }) {
            state.source = payload.source
            state.loading = false
        }
    }
})


export const { setUser, setLoading } = userSlice.actions
export default userSlice.reducer