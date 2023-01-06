import { configureStore } from "@reduxjs/toolkit";
import question from "../slice/question";
import play from "../slice/play";

export const store = configureStore({
  reducer: {
    question,
    play,
  }
})
