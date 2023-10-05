import {createAsyncThunk, createSelector, createSlice} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import type {RootState} from "../../store";
import {Platform} from ".";
import axiosInstance from "src/axiosConfig";
import {ApiKey} from "src/constants";

export const fetchPlatforms = createAsyncThunk<Array<Platform>>(
    "platforms/fetchPlatforms",
    async () => {
        const response = await axiosInstance.get(`/platforms?key=` + ApiKey);
        return response.data.results;
    }
);

interface PlatformsState {
    items: Array<Platform>;
    loading: boolean;
    error: string | null;
}

const initialState: PlatformsState = {
    items: [],
    loading: false,
    error: null
};

export const platformsSlice = createSlice({
    name: "platforms",
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
        builder.addCase(fetchPlatforms.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchPlatforms.fulfilled, (state, action) => {
            state.loading = false;
            state.items = action.payload;
            state.items.forEach((item) =>
                item.games.sort((item1, item2) => item2.added - item1.added)
            );
        });
        builder.addCase(fetchPlatforms.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    }
});
export const {toggleLoading, error} = platformsSlice.actions;

export const selectLoading = (state: RootState) => state.platforms.loading;
export const selectError = (state: RootState) => state.platforms.error;
export const selectPlatforms = (state: RootState) => state.platforms.items;
export const selectPlatformByName = (name: string) =>
    createSelector(
        (state: RootState) => state.platforms.items,
        (items) => items.find((item) => item.name === name)
    );
