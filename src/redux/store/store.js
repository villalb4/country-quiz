import { configureStore } from "@reduxjs/toolkit";
import question from "../slice/question";

export const store = configureStore({
  reducer: {
    question,
  }
})
