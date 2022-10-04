import React, {useState} from 'react';
import FlowerCards from '../FlowerCards/FlowerCards';
import useFetch from '../utils/useFetch';
import PaginationBox from '../utils/PaginationBox'

function FlowerCardsDisplay() {
    const [currPage, setCurrPage] = useState<number>(1)
    const {data, isPending, error} = useFetch("flowers?page=" + currPage);

    return (
        <div>
            {!isPending && !error && 
            <>
                <FlowerCards flowers={data.flowers}/>
                <PaginationBox currPageHandler={setCurrPage} maxPages={data.meta.pagination.total_pages}/>            
            </>
            }
        </div>
    );
}

export default FlowerCardsDisplay;