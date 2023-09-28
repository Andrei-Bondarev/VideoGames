import {Box, Grid, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    return (
        <Grid container direction={"column"}>
            <Grid item container justifyContent={"center"}>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Box
                        sx={{
                            height: "100px"
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#ffffff"
                            }}
                            variant="h5"
                        >
                            Home
                        </Typography>
                    </Box>
                </Link>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Link to={"/genres"} style={{textDecoration: "none"}}>
                    <Box
                        sx={{
                            height: "100px"
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#ffffff"
                            }}
                            variant="h5"
                        >
                            Genres
                        </Typography>
                    </Box>
                </Link>
            </Grid>
            <Grid item container justifyContent={"center"}>
                <Link to={"/platforms"} style={{textDecoration: "none"}}>
                    <Box
                        sx={{
                            height: "100px"
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                color: "#ffffff"
                            }}
                        >
                            Platforms
                        </Typography>
                    </Box>
                </Link>
            </Grid>
        </Grid>
    );
};

export {Sidebar};
