import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/UserInfo";
import { tokenName } from "../utils/Constants";

interface LogedUserState {
  loged: boolean;
  logedUser: User | null;
}

const initialState: LogedUserState = {
  loged: false,
  logedUser: null,
};

const logedUserSlice = createSlice({
  name: "logedUser",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.loged = true;
      state.logedUser = action.payload;
    },
    logout(state) {
      localStorage.removeItem(tokenName);
      state.logedUser = null;
      state.loged = false;
    },
  },
});

export const { logout, login } = logedUserSlice.actions;

export default logedUserSlice.reducer;
