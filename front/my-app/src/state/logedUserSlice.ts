import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FlowerDetailsData } from "../model/FlowerInterface";
import { Sighting } from "../model/SightingInterface";
import { User } from "../model/UserInfo";
import { tokenName } from "../utils/Constants";

interface LogedUserState {
  logged: boolean;
  loggedUser: string;
  favoriteFlowers: {flowers: FlowerDetailsData[], page:number, totalPages:number}
  sightings: Sighting[];
}

const initialState: LogedUserState = {
  logged: false,
  loggedUser: '',
  favoriteFlowers: {flowers:[], page:1, totalPages:1},
  sightings: []
};

const logedUserSlice = createSlice({
  name: "logedUser",
  initialState,
  reducers: {
    login(state, action: PayloadAction<User>) {
      state.logged = true;
      state.loggedUser = JSON.stringify(action.payload);
    },
    logout(state) {
      localStorage.removeItem(tokenName);
      state.loggedUser = '';
      state.logged = false;
      state.sightings = [];
      state.favoriteFlowers = {flowers:[], page:1, totalPages:1};
    },
    setFavoriteFlowers(state, action: PayloadAction<{favFlowers:FlowerDetailsData[], currPage:number, totalPages:number}>) {
      state.favoriteFlowers.flowers = action.payload.favFlowers;
      state.favoriteFlowers.page = action.payload.currPage;
      state.favoriteFlowers.totalPages = action.payload.totalPages;
    },
    removeFavoriteFlower(state, action: PayloadAction<number>) {
      state.favoriteFlowers.flowers = state.favoriteFlowers.flowers.filter((item) => item.id !== action.payload);
    },
    addFavoriteFlower(state, action: PayloadAction<FlowerDetailsData>) {
      state.favoriteFlowers.flowers.push(action.payload);
    },
    setFavoriteFlowersPage(state, action: PayloadAction<number>) {
      state.favoriteFlowers.page = action.payload;
    },
    setSightings(state, action: PayloadAction<Sighting[]>) {
      state.sightings = action.payload;
    }
  },
});

export const { logout, login, setFavoriteFlowers, setSightings, removeFavoriteFlower, addFavoriteFlower } = logedUserSlice.actions;

export default logedUserSlice.reducer;
