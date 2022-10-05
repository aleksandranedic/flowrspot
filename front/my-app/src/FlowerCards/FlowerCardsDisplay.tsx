import React, {useState} from 'react';
import FlowerCards from '../FlowerCards/FlowerCards';
import { useFetch } from '../utils/useFetch';
import PaginationBox from '../utils/PaginationBox'
import { FlowerList } from '../model/FlowerInterface';
import { Pagination } from '../model/Pagination';
import {backlink} from "../utils/Constants"

const FlowerCardsDisplay: React.FC = () => {
    const [currPage, setCurrPage] = useState<number>(1)
    const [data, isPending, error] = useFetch<FlowerList & Pagination>({method:"GET", url:backlink + "flowers?page=" + currPage}); // 

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