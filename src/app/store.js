import { configureStore } from "@reduxjs/toolkit";
import leaguesReducer from "../features/leagues/leaguesSlice";
import leagueReducer from "../features/league/leagueSlice";
import teamsReducer from "../features/teams/teamsSlice";
import teamReducer from "../features/team/teamSlice";
import gameReducer from "../features/games/gameSlice";

export const store = configureStore({
  reducer: {
    leagues: leaguesReducer,
    league: leagueReducer,
    teams: teamsReducer,
	  team: teamReducer,
	  game: gameReducer
  },
});