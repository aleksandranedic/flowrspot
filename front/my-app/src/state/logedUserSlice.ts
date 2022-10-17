import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../model/UserInfo";
import { tokenName } from "../utils/Constants";

interface LogedUserState {
  loged: boolean;
  logedUser: string;
}

const initialState: LogedUserState = {
  loged: false,
  logedUser: '',
};

const logedUserSlice = createSlice({
  name: "logedUser",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.loged = true;
      state.logedUser = JSON.stringify(action.payload);
    },
    logout(state) {
      localStorage.removeItem(tokenName);
      state.logedUser = '';
      state.loged = false;
    },
  },
});

export const { logout, login } = logedUserSlice.actions;

export default logedUserSlice.reducer;
