import { configureStore } from "@reduxjs/toolkit";
import logedUserReducer from "./logedUserSlice";

export const store = configureStore({
  reducer: {
    loggedUser: logedUserReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
