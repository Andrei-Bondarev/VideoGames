import {Grid, ImageList, ImageListItem, Typography} from "@mui/material";
import React from "react";
import {useParams} from "react-router-dom";
import {useAppSelector} from "src/store";
import {selectGameById} from "./games-slice";

const GameDetails = () => {
    const {gameId} = useParams();
    const gameData = useAppSelector(selectGameById(+gameId));
    return (
        <Grid
            container
            justifyContent={"space-between"}
            sx={{
                margin: "0 150px"
            }}
            spacing={4}
        >
            <Grid item xs={6}>
                <Typography variant="h2">{gameData.name}</Typography>
            </Grid>
            <Grid item xs={6}>
                <ImageList cols={2} gap={8}>
                    {gameData.short_screenshots.map((item) => (
                        <ImageListItem key={item.image}>
                            <img
                                srcSet={`${item.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.image}?w=248&fit=crop&auto=format`}
                                alt="screenshot"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
    );
};

export {GameDetails};
