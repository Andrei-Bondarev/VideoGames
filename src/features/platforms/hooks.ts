import {useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "src/store";
import {fetchPlatforms, selectError, selectPlatforms, selectLoading} from ".";

export const useFetchPlatforms = () => {
    const isAlreadyFetched = useRef(false);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (!isAlreadyFetched.current) {
            dispatch(fetchPlatforms());
            isAlreadyFetched.current = true;
        }
    }, [dispatch]);
    const platforms = useAppSelector(selectPlatforms);
    const loading = useAppSelector(selectLoading);
    const error = useAppSelector(selectError);
    return [platforms, loading, error] as const;
};
