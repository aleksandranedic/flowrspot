import React, {useState, useEffect} from 'react'
import axios, {AxiosRequestConfig} from 'axios'

export const useFetch = <T>(config: AxiosRequestConfig<any>): [T | undefined, boolean, string] => {

    const [data, setData] = useState<T>();
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect( () => {
        sendRequest();
    }, [config.url])

    const sendRequest = () => {
        setIsPending(true);
        axios(config)
        .then(res => {
            setData(res.data);
            setError('');
        })
        .catch(err => {
            setError(err.message);
        })
        .finally( () => setIsPending(false))
    }
  
    return [data, isPending, error];
}