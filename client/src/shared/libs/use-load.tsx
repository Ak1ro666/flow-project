import { useEffect, useState } from 'react';

export function useLoad<T>(fetcher: () => Promise<T>) {
    const [data, setData] = useState<T>();
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const fetchData = () => {
        setIsLoading(true);
        fetcher()
            .then(setData)
            .catch((err) => setError(err?.message))
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data,
        error,
        isLoading,
        refetch: fetchData,
    };
}
