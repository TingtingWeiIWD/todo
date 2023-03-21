import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialTasks = [
  { description: "Walk the dog", id: uuid(), status: 1 },
  { description: "Wash the car", id: uuid(), status: 1 },
  { description: "Finish the lab", id: uuid(), status: 2 },
  { description: "Grocery shopping", id: uuid(), status: 3 },
];
export const taskSlice = createSlice({
  name: "task",
  initialState: { tasks: initialTasks },

  reducers: {
    clearTasks: (state) => {
      state.tasks = [];
    },

    changeStatus: (state, action) => {
      const id = action.payload;
      state.tasks.forEach((task) => {
        if (task.id === id) {
          if (task.status === 3) {
            task.status = 1;
          } else {
            task.status++;
          }
        }
      });
    },

    removeTask: (state, action) => {
      const id = action.payload;
      let newTasks = [];
      state.tasks.forEach((task) => {
        if (task.id !== id) {
          newTasks.push(task);
        }
      });
      state.tasks = newTasks;
    },

    addTask: (state, action) => {
      const newTask = {
        id: uuid(),
        description: action.payload.description,
        status: action.payload.status,
      };
      //  state.tasks.push(newTask);
      state.tasks.unshift(newTask);
    },
  },
});

export const { clearTasks, changeStatus, removeTask, addTask } =
  taskSlice.actions;
export default taskSlice.reducer;
