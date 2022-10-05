import React, {useState} from 'react';
import FlowerCards from '../FlowerCards/FlowerCards';
import { useFetch } from '../fetch-data/useFetch';
import PaginationBox from '../utils/PaginationBox'
import {backlink} from "../utils/Constants"
import { fetchFlowers, flowerData } from '../fetch-data/services/flowerService';

const FlowerCardsDisplay: React.FC = () => {
    const [currPage, setCurrPage] = useState<number>(1)
    const [data, isPending, error] = useFetch<flowerData>(fetchFlowers ,backlink + "flowers?page=" + currPage); // 

    return (
        <div>
            {!isPending && !error && data && 
            <>
                <FlowerCards flowers={data.flowers}/>
                <PaginationBox currPageHandler={setCurrPage} maxPages={data.meta.pagination.total_pages}/>            
            </>
            }
        </div>
    );
}

export default FlowerCardsDisplay;