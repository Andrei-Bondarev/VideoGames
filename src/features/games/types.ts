import {Genre} from "../genres";
import {Platform} from "../platforms";

type Rating = {
    id: number;
    title: string;
    count: number;
    percent: number;
};

type Screenshot = {
    id: number;
    image: string;
};
export interface Game {
    id: number;
    slug: string;
    name: string;
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings: Array<Rating>;
    ratings_count: number;
    reviews_text_count: number;
    added: number;
    added_by_status: {
        yet: number;
        owned: number;
        beaten: number;
        toplay: number;
        dropped: number;
        playing: number;
    };
    metacritic: number;
    playtime: number;
    suggestion_count: number;
    updated: string;
    reviews_count: number;
    platforms: Array<Platform>;
    genres: Array<Genre>;
    description_raw: string;
    short_screenshots: Array<Screenshot>;
}
export type Filters = {
    platformId?: number;
    genreId?: number;
};
