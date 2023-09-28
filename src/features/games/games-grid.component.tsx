import {CircularProgress, Grid} from "@mui/material";
import React from "react";
import {GameCard} from "./game-card.component";
import {useFetchGames, useFetchGamesWithFilters} from "./hooks";
import {useNavigate, useParams} from "react-router-dom";

const GamesGrid = () => {
    const {genreOrPlatformName} = useParams();
    const [games, loading, error] = useFetchGamesWithFilters(genreOrPlatformName);
    const navigate = useNavigate();
    if (loading) return <CircularProgress />;
    if (error) navigate("/error");
    return (
        <Grid container spacing={4}>
            {games.map((item) => (
                <Grid key={item.id} item xs={3}>
                    <GameCard title={item.name} image={item.background_image} />
                </Grid>
            ))}
        </Grid>
    );
};

export {GamesGrid};
