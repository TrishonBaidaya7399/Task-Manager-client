import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks/tasksSlice";
import usersSlice from "./features/users/usersSlice";
import { baseApi } from "./api/baseApi/baseAPI";

const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    users: usersSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export default store;
