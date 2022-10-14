import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteFlower } from "../model/FlowerInterface";
import { SightingDetails } from "../model/SightingInterface";
import { User } from "../model/UserInfo";
import { tokenName } from "../utils/Constants";

interface LogedUserState {
  loged: boolean;
  logedUser: User | null;
  favoriteFlowers: {flowers: FavoriteFlower[], page:number}
  sightings: SightingDetails[];
}

const initialState: LogedUserState = {
  loged: false,
  logedUser: null,
  favoriteFlowers: {flowers:[], page:1},
  sightings: []
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
    setFavoriteFlowers(state, action: PayloadAction<FavoriteFlower[]>) {
      state.favoriteFlowers.flowers = action.payload;
    },
    setFavoriteFlowersPage(state, action: PayloadAction<number>) {
      state.favoriteFlowers.page = action.payload;
    },
    setSightings(state, action: PayloadAction<SightingDetails[]>) {
      state.sightings = action.payload;
    }
  },
});

export const { logout, login, setFavoriteFlowers, setSightings } = logedUserSlice.actions;

export default logedUserSlice.reducer;
