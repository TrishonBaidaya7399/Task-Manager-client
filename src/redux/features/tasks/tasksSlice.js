import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    tasks: [],
isLoading: false,
}
export const tasksSlice= createSlice({
    name: 'tasksSlice',
    initialState,
    reducers: {

    }
})

export default tasksSlice.reducer;