import React, {FC} from "react";
import Grid from "@mui/material/Grid/Grid";
import Typography from "@mui/material/Typography/Typography";
import Divider from "@mui/material/Divider/Divider";
import {Game} from "src/features/games";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import {Link} from "react-router-dom";
type props = {
    title: string;
    countOfFollowers: number;
    items: Array<Game>;
    imageUrl: string;
};

const CardItem: FC<props> = ({title, countOfFollowers, items, imageUrl}) => {
    return (
        <Grid
            container
            direction={"column"}
            justifyContent={"space-around"}
            sx={{
                position: "relative",
                width: "100%",
                minHeight: "225px",
                padding: "5px 30px"
            }}
        >
            <div
                style={{
                    backgroundImage: `url(
                        ${
                            imageUrl ||
                            "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
                        }
                    )`,
                    backgroundSize: "cover",
                    position: "absolute",
                    top: "0px",
                    right: "0px",
                    bottom: "0px",
                    left: "0px",
                    opacity: 0.2,
                    zIndex: -1
                }}
            />
            <Grid item container justifyContent={"center"} alignItems={"center"}>
                <Typography component={Link} to={`/${title}`} variant="h5">
                    {title || "Title"}
                </Typography>
            </Grid>

            <Grid item container justifyContent={"space-between"} alignItems={"center"}>
                <Grid item xs={8}>
                    <Typography variant="body1">Popular items</Typography>
                </Grid>
                <Grid item xs={"auto"}>
                    <Typography variant="body1">{countOfFollowers || 0}</Typography>
                </Grid>
                <Divider
                    flexItem
                    sx={{
                        bgcolor: "#ffffff",
                        width: "100%",
                        height: "1px",
                        margin: "10px 0px",
                        opacity: "50%"
                    }}
                />
                <Grid item xs={8}>
                    <Typography variant="body2">1.{items[0].name || "Game title"}</Typography>
                </Grid>
                <Grid container item xs={"auto"}>
                    <Typography variant="body2">{items[0].added || 0}</Typography>
                    <PersonOutlineIcon
                        fontSize="small"
                        sx={{
                            opacity: 0.9
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">2.{items[1].name || "Game title"}</Typography>
                </Grid>
                <Grid container item xs={"auto"}>
                    <Typography variant="body2">{items[1].added || 0}</Typography>
                    <PersonOutlineIcon
                        fontSize="small"
                        sx={{
                            opacity: 0.9
                        }}
                    />
                </Grid>
                <Grid item xs={8}>
                    <Typography variant="body2">3.{items[2].name || "Game title"}</Typography>
                </Grid>
                <Grid container item xs={"auto"}>
                    <Typography variant="body2">{items[2].added || 0}</Typography>
                    <PersonOutlineIcon
                        fontSize="small"
                        sx={{
                            opacity: 0.9
                        }}
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export {CardItem};
