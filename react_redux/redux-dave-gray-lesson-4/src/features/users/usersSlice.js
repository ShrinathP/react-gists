import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

const initialState = []

                                        //sliceName/function
export const fetchUsers = createAsyncThunk('users/fetchUsers', async() => {
    const response = await axios.get(USERS_URL)
    return response.data;
})

//overriding the initialState with payload array
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload;
        })
    }
})

export const {} = usersSlice.actions
export const selectAllUsers = (state) => state.users
export default usersSlice.reducer