import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  isLoading: false,
};
export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
        if(state.tasks.length === 0){
            state.tasks.push({id: 1, status: "pending", ...action.payload});
        }else{
            const lastElement = state.tasks.at(-1); // at() is a newly added feature of javaScript, which get the indexed input and provide the data from the mentioned indexed array
            state.tasks.push({id: lastElement.id + 1, status: "pending", ...action.payload})
        }
    },
    removeTask: (state,action)=>{
        state.tasks.filter((task)=> task.id !== action.payload)
    },
    updateStatus: (state, action)=>{
        console.log(action.payload);
        const target = state.tasks.find((task)=> task.id === action.payload.id);
        target.status = action.payload.status
    }
  },
});

export const { addTask, removeTask, updateStatus } = tasksSlice.actions;
export default tasksSlice.reducer;
