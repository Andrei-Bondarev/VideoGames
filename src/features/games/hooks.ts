import {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "src/store";
import {fetchGames, fetchGamesWithFilters, selectError, selectGames, selectLoading} from ".";
import {selectGenreByName} from "../genres";
import {selectPlatformByName} from "../platforms";

export const useFetchGames = () => {
    const isAlreadyFetched = useRef(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isAlreadyFetched.current) {
            dispatch(fetchGames());
            isAlreadyFetched.current = true;
        }
    }, [dispatch]);
    const games = useAppSelector(selectGames);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    return [games, loading, error] as const;
};

export const useFetchGamesWithFilters = (genreOrPlatformName: string) => {
    const currentGenre = useAppSelector(selectGenreByName(genreOrPlatformName));
    const currentPlatform = useAppSelector(selectPlatformByName(genreOrPlatformName));
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(
            fetchGamesWithFilters({
                platformId: currentPlatform?.id,
                genreId: currentGenre?.id
            })
        );
    }, [currentGenre?.id, currentPlatform?.id, dispatch, genreOrPlatformName]);
    const games = useAppSelector(selectGames);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    return [games, loading, error] as const;
};
