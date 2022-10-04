import axios, {AxiosError, AxiosResponse} from 'axios'
import { useState, useEffect } from 'react';
import { FlowerList } from '../model/FlowerInterface';
import { Pagination } from '../model/Pagination';
import {backlink} from "./Constants"

const useFetch = (url:string) => {
    const placeholder : FlowerList & Pagination = {flowers:[{ id:	-1, name: "", latin_name: "", sightings: -1, profile_picture: "", favorite: false}], meta: {pagination: {current_page:-1, prev_page:-1, next_page:-1, total_pages:-1}}};
    
    const [data, setData] = useState<FlowerList & Pagination>(placeholder);
    const [isPending, setIsPending] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect( () => {
        axios
            .get(backlink + url)
            .then((res: AxiosResponse) => {
                console.log(res.data)
               setData(res.data);
               setIsPending(false);
               setError(null);

            }).catch( (err: AxiosError) => {
                setIsPending(false);
                setError(err.message);
            })
    }, [url]);

    return {data, isPending, error};
}

export default useFetch;