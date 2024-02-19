import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Tishon Baidaya",
  email: "shukantobaidya2018@gmail.com",
  userTasks: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addTasks: (state, action) => {
        console.log("Payload:", action.payload);
      state.userTasks = action.payload;
    },
  },
});

export const {addTasks} = usersSlice.actions;
export default usersSlice.reducer;
