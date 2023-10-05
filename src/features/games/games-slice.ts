import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {Filters, Game} from ".";
import axiosInstance from "src/axiosConfig";
import {ApiKey} from "src/constants";

export const fetchGames = createAsyncThunk<Array<Game>>("games/fetchGames", async () => {
    const response = await axiosInstance.get(`/games?key=` + ApiKey);
    return response.data.results;
});

export const fetchGamesWithFilters = createAsyncThunk<Array<Game>, Filters>(
    "games/fetchGamesWithFilters",
    async (filters) => {
        let url = `/games?key=` + ApiKey;
        if (filters.platformId) url += `&platforms=${filters.platformId}`;
        if (filters.genreId) url += `&genres=${filters.genreId}`;
        const response = await axiosInstance.get(url);
        return response.data.results;
    }
);

interface GamesState {
    items: Array<Game>;
    loading: boolean;
    error: string | null;
}

const initialState: GamesState = {
    items: [],
    loading: false,
    error: null
};

export const gamesSlice = createSlice({
    name: "games",
    initialState,
    reducers: {
        toggleLoading: (state) => {
            state.loading = !state.loading;
        },
        error: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchGames.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchGames.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
        builder.addCase(fetchGames.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(fetchGamesWithFilters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
        builder.addCase(fetchGamesWithFilters.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchGamesWithFilters.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
        });
    }
});
export const {toggleLoading, error} = gamesSlice.actions;

export const selectLoading = (state: RootState) => state.games.loading;
export const selectError = (state: RootState) => state.games.error;
export const selectGames = (state: RootState) => state.games.items;
export const selectGameById = (gameId: number) =>
    createSelector(
        (state: RootState) => state.games.items,
        (items) => items.find((item) => item.id === gameId)
    );
