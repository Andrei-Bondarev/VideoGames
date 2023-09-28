import {Grid, Typography} from "@mui/material";
import React from "react";
import {SearchBar} from "../search-bar";

const Header = () => {
    return (
        <header>
            <Grid container spacing={2}>
                <Grid container item xs={4} justifyContent={"center"} alignItems={"center"}>
                    <Typography variant="h5">Game Wiki</Typography>
                </Grid>
                <Grid container item xs={8} justifyContent={"center"}>
                    <SearchBar />
                </Grid>
            </Grid>
        </header>
    );
};

export {Header};
