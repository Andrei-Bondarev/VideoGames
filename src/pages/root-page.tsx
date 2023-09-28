import {Grid} from "@mui/material";
import React from "react";
import {Link, Outlet} from "react-router-dom";
import {Header, Sidebar} from "src/features/ui";
const RootPage = () => {
    return (
        <div
            style={{
                margin: "30px 20px"
            }}
        >
            <Header />
            <Grid
                container
                spacing={2}
                sx={{
                    marginTop: "25px"
                }}
            >
                <Grid item xs={1.5} container justifyContent={"center"}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10.5} container justifyContent={"center"}>
                    <Outlet />
                </Grid>
            </Grid>
        </div>
    );
};

export default RootPage;
