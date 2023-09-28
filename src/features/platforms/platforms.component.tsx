import React from "react";
import {useFetchPlatforms} from "./hooks";
import {CardGrid} from "../ui";

const Platforms = () => {
    const [platforms, loading, error] = useFetchPlatforms();
    return <CardGrid items={platforms} loading={loading} error={error} />;
};

export {Platforms};
