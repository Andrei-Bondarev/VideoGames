import {Card, CardContent, CardMedia, Typography} from "@mui/material";
import React from "react";
import {Link} from "react-router-dom";

type GameCardProps = {
    title: string;
    image: string;
    id: number;
};
const GameCard: React.FC<GameCardProps> = ({title, image, id}) => {
    return (
        <Card sx={{minWidth: 375, minHeight: 300, borderRadius: "20px"}}>
            <CardMedia
                sx={{height: 175}}
                image={
                    image ||
                    "https://media.rawg.io/media/screenshots/221/221a03c11e5ff9f765d62f60d4b4cbf5.jpg"
                }
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component={Link} to={`/games/${id}`}>
                    {title || "Portal 2"}
                </Typography>
            </CardContent>
        </Card>
    );
};

export {GameCard};
