export interface Game {
    id: string;
    name: string;
    slug: string;
    released: string;
    background_image: string;
    rating: number;
    added: number;
}
export type Filters = {
    platformId?: number;
    genreId?: number;
};