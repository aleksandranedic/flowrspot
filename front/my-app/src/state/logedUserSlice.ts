import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FavoriteFlower } from "../model/FlowerInterface";
import { Sighting } from "../model/SightingInterface";
import { User } from "../model/UserInfo";
import { tokenName } from "../utils/Constants";

interface LogedUserState {
  logged: boolean;
  loggedUser: User | null;
  favoriteFlowers: {flowers: FavoriteFlower[], page:number}
  sightings: Sighting[];
}

const initialState: LogedUserState = {
  logged: false,
  loggedUser: null,
  favoriteFlowers: {flowers:[], page:1},
  sightings: []
};

const logedUserSlice = createSlice({
  name: "logedUser",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.logged = true;
      state.loggedUser = action.payload;
    },
    logout(state) {
      localStorage.removeItem(tokenName);
      state.loggedUser = null;
      state.logged = false;
    },
    setFavoriteFlowers(state, action: PayloadAction<FavoriteFlower[]>) {
      state.favoriteFlowers.flowers = action.payload;
    },
    setFavoriteFlowersPage(state, action: PayloadAction<number>) {
      state.favoriteFlowers.page = action.payload;
    },
    setSightings(state, action: PayloadAction<Sighting[]>) {
      state.sightings = action.payload;
    }
  },
});

export const { logout, login, setFavoriteFlowers, setSightings } = logedUserSlice.actions;

export default logedUserSlice.reducer;
