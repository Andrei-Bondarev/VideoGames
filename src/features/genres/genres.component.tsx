import React from "react";
import {useFetchGenres} from "./hooks";
import {CardGrid} from "../ui";

const Genres = () => {
    const [genres, loading, error] = useFetchGenres();
    return <CardGrid loading={loading} error={error} items={genres} />;
};

export {Genres};
