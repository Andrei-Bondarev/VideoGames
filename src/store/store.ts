import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {genresSlice} from "src/features/genres";
import {platformsSlice} from "src/features/platforms";
import {gamesSlice} from "src/features/games";
import storage from "redux-persist/lib/storage";
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from "redux-persist";
const rootReducer = combineReducers({
    genres: genresSlice.reducer,
    games: gamesSlice.reducer,
    platforms: platformsSlice.reducer
});

const persistConfig = {
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export {store};

export const persistor = persistStore(store);
