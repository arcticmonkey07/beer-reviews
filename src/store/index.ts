import { configureStore } from "@reduxjs/toolkit";
import reviewReducer from "./reviewSlice";

const store = configureStore({
  reducer: {
    review: reviewReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;