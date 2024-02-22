import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      status: "pending",
      title: "Todo ",
      deadLine: "2024-02-15",
      priority: "high",
      assignedTo: "Trishon Baidaya",
      description: " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos molestias cum culpa inventore illo, quae eveniet optio explicabo corrupti perferendis libero rem harum architecto laboriosam voluptas non quis numquam veniam ut natus animi fugiat a, minus blanditiis? Eaque, totam quibusdam assumenda officia amet voluptatibus minima deleniti cupiditate, quae dicta omnis, cumque sint quidem. Vel provident reprehenderit, voluptatem, laborum iste, unde quae ex sed tempore amet excepturi commodi architecto impedit quisquam molestiae maxime voluptates saepe debitis blanditiis vitae libero nisi consequuntur? Eum veniam sequi, mollitia beatae facilis explicabo reprehenderit exercitationem perspiciatis incidunt. Quibusdam iusto dignissimos dolorum. Corporis, ab rem eum tempora iure nostrum harum hic esse commodi asperiores odit impedit, temporibus id vitae saepe minus consectetur ea. Nisi est nesciunt iste aperiam temporibus iusto, incidunt minus soluta quis accusantium non voluptates eos cupiditate dicta eligendi quod ratione neque esse delectus doloremque quo quas. Dolorem voluptatum libero consequatur laboriosam autem consequuntur, nulla asperiores corrupti aliquam adipisci voluptatem inventore consectetur officiis dolores suscipit modi quas quisquam! Iusto error tenetur deleniti, praesentium, nemo saepe ut vero aspernatur dicta minima, est veritatis tempore et? Dolor velit id debitis ex maiores numquam facilis nostrum? Impedit accusantium culpa dolores voluptatem sequi placeat aliquam, iure magni inventore ratione.",
     
    },
  ],
  userSpecificTasks: [],
};
export const tasksSlice = createSlice({
  name: "tasksSlice",
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (state.tasks.length === 0) {
        state.tasks.push({ id: 1, status: "pending", ...action.payload });
      } else {
        const lastElement = state.tasks.at(-1); // at() is a newly added feature of javaScript, which get the indexed input and provide the data from the mentioned indexed array
        state.tasks.push({
          id: lastElement.id + 1,
          status: "pending",
          ...action.payload,
        });
      }
    },
    removeTask: (state, action) => {
      const remainingTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = remainingTasks;
    },
    updateStatus: (state, action) => {
      console.log(action.payload);
      const target = state.tasks.find((task) => task.id === action.payload.id);
      target.status = action.payload.status;
    },
    userTasks:(state, action)=>{
      state.userSpecificTasks = state.tasks.filter((item) => item.assignedTo === action.payload)
      console.log("user name : ",state.userSpecificTasks);
    }
  },
});

export const { addTask, removeTask, updateStatus, userTasks } = tasksSlice.actions;
export default tasksSlice.reducer;
