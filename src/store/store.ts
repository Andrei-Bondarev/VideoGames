import {configureStore} from "@reduxjs/toolkit";
import {genresSlice} from "src/features/genres";
import {platformsSlice} from "src/features/platforms";
import {gamesSlice} from "src/features/games";
//types?
const store = configureStore({
    reducer: {
        genres: genresSlice.reducer,
        games: gamesSlice.reducer,
        platforms: platformsSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {store};
