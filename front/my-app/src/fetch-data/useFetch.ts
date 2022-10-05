import {useState, useEffect} from 'react'
import { AxiosError, AxiosResponse } from 'axios'

export const useFetch = <T>(method:(url: string) => Promise<AxiosResponse>, url:string): [T | undefined, boolean, string] => {

    const [data, setData] = useState<T>();
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    useEffect( () => {
        setIsPending(true);
        const fetchData = async () => {

            await method(url)
            .then((res: AxiosResponse) => {
                setData(res.data);
                setError('');
            })
            .catch((err:AxiosError) => {
                setError(err.message);
            })
            .finally( () => setIsPending(false))
          };
      
        fetchData();
    }, [url, method])

    
  
    return [data, isPending, error];
}