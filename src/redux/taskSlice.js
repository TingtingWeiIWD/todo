import { createSlice } from "@reduxjs/toolkit";
import uuid from "react-uuid";

const initialTasks = [
  { description: "Walk the dog", id: uuid(), completed: true },
  { description: "Wash the car", id: uuid(), completed: true },
  { description: "Finish the lab", id: uuid(), completed: false },
  { description: "Grocery shopping", id: uuid(), completed: false },
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
          task.completed = !task.completed;
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
        completed: action.payload.completed,
      };
      //  state.tasks.push(newTask);
      state.tasks.unshift(newTask);
    },
  },
});

export const { clearTasks, changeStatus, removeTask, addTask } =
  taskSlice.actions;
export default taskSlice.reducer;
