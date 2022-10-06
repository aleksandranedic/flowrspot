import {useState, useEffect} from 'react'
import { AxiosResponse } from 'axios'

export const useFetch = <T>(method:(url: string) => Promise<AxiosResponse>, url:string): [T | undefined, boolean, string | null] => {

    const [data, setData] = useState<T>();
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        setIsPending(true);
        const fetchData = async () => {

            await method(url)
            .then((res: AxiosResponse) => {
                setData(res.data);
                setError(null);
            })
            .catch((err:AxiosResponse) => {
                setError(err.data.error);
            })
            .finally( () => setIsPending(false))
          };
      
        fetchData();
    }, [url, method])

    
  
    return [data, isPending, error];
}