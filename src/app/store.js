import { configureStore } from "@reduxjs/toolkit";
import leaguesReducer from "../features/leagues/leaguesSlice";

export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
  },
});