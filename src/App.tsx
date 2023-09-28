import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RootPage from "./pages/root-page";
import ErrorPage from "./pages/error-page";
import HomePage from "./pages/home-page";
import GenresPage from "./pages/genres-page";
import createTheme from "@mui/material/styles/createTheme";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import CssBaseline from "@mui/material/CssBaseline/CssBaseline";
import PlatformsPage from "./pages/platforms-page";
import {Provider} from "react-redux";
import {store} from "./store";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <HomePage />,
                errorElement: <ErrorPage />
            },
            {
                path: "/:genreOrPlatformName",
                element: <HomePage />,
                errorElement: <ErrorPage />
            },
            {
                path: "genres",
                element: <GenresPage />,
                errorElement: <ErrorPage />
            },
            {
                path: "platforms",
                element: <PlatformsPage />,
                errorElement: <ErrorPage />
            }
        ]
    }
]);

const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
});

const App = () => (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </ThemeProvider>
);

export default App;
