import {useEffect, useState} from "react";

/**
 *
 * @param {string} url
 * @param {FetchEventInit | {}} options
 */
export function useFetch(url = "", options= {} ) {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json; charset=UTF-8',
                ...options.headers,
            }
        })
            .then(res => res.json())
            .then(data => setData(data))
            .catch(error => setError(error))
            .finally(() => setLoading(false));
    }, [url]);

    return { loading, error, data };
}