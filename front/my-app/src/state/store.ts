import { configureStore } from "@reduxjs/toolkit";
import logedUserReducer from "./logedUserSlice";

export const store = configureStore({
  reducer: {
    logedUser: logedUserReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
