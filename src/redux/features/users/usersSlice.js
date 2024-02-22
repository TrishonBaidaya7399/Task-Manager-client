import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Trishon Baidaya",
  email: "shukantobaidya2018@gmail.com",
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const {addTasks} = usersSlice.actions;
export default usersSlice.reducer;
