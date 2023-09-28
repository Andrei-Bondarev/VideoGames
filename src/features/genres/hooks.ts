import {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "src/store";
import {fetchGenres, selectError, selectGenres, selectLoading} from ".";

export const useFetchGenres = () => {
    const isAlreadyFetched = useRef(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isAlreadyFetched.current) {
            dispatch(fetchGenres());
            isAlreadyFetched.current = true;
        }
    }, [dispatch]);
    const genres = useAppSelector(selectGenres);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    return [genres, loading, error] as const;
};
