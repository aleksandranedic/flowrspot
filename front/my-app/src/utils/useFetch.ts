import React, {useState, useEffect} from 'react'
import axios, {AxiosRequestConfig} from 'axios'

export const useFetch = <T>(method:string, url:string): [T | undefined, boolean, string] => {

    const [data, setData] = useState<T>();
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect( () => {
        setIsPending(true);
        axios({method:method, url:url})
        .then(res => {
            setData(res.data);
            setError('');
        })
        .catch(err => {
            setError(err.message);
        })
        .finally( () => setIsPending(false))
    }, [url, method])

    
  
    return [data, isPending, error];
}