import Grid from "@mui/material/Grid/Grid";
import {useNavigate} from "react-router-dom";
import {CardItem} from ".";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import React from "react";
import {Platform} from "src/features/platforms";
import {Genre} from "src/features/genres";

type CardGridProps = {
    loading: boolean;
    error: string | null;
    items: Array<Genre> | Array<Platform>;
};

const CardGrid: React.FC<CardGridProps> = ({items, loading, error}) => {
    const navigate = useNavigate();
    if (loading) return <CircularProgress />;
    if (error) navigate("/error");
    return (
        <Grid container spacing={4}>
            {items.map((item) => (
                <Grid key={item.id} item xs={3}>
                    <CardItem
                        title={item.name}
                        countOfFollowers={item.games_count}
                        items={item.games}
                        imageUrl={item.image_background}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export {CardGrid};
