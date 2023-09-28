import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {Genre} from ".";
import axios from "axios";

export const fetchGenres = createAsyncThunk<Array<Genre>>("genres/fetchGenres", async () => {
    const response = await axios.get(
        `https://api.rawg.io/api/genres?key=8969d9d889774691accc2cd4788c8df0`
    );
    return response.data.results;
});

interface GenresState {
    items: Array<Genre>;
    loading: boolean;
    error: string | null;
}

const initialState: GenresState = {
    items: [],
    loading: false,
    error: null
};

export const genresSlice = createSlice({
    name: "genres",
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
        builder.addCase(fetchGenres.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchGenres.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.items.forEach((item) =>
                item.games.sort((item1, item2) => item2.added - item1.added)
            );
        });
        builder.addCase(fetchGenres.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});
export const {toggleLoading, error} = genresSlice.actions;

export const selectLoading = (state: RootState) => state.genres.loading;
export const selectError = (state: RootState) => state.genres.error;
export const selectGenres = (state: RootState) => state.genres.items;
export const selectGenreByName = (name: string) =>
    createSelector(
        (state: RootState) => state.genres.items,
        (items) => items.find((item) => item.name === name)
    );
