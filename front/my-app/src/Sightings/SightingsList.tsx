import {useState} from 'react'
import { getSightings, sightingDetailsData } from '../fetch-data/services/sightingService';
import { useFetch } from '../fetch-data/useFetch';
import AddSightingButton from '../utils/AddSightingButton';
import PaginationBox from '../utils/PaginationBox';
import SightingsBanner from './SightingsBanner';
import SightingsCards from './SightingsCards';

const SightingsList: React.FunctionComponent = () => {
    const [currPage, setCurrPage] = useState<number>(1);
   
    const [data, isPending, error] = useFetch<sightingDetailsData>(getSightings, `sightings?page=${currPage}`);
    return ( 
        <>
        <SightingsBanner />
        {!isPending && !error && data &&
            <div className='bg-secondary-background'>
            <SightingsCards sightings={data.sightings} />
            <PaginationBox currPageHandler={setCurrPage} maxPages={data.meta.pagination.total_pages}/>
            </div>
        }
        <div className='flex w-full justify-center sm:hidden mt-10 mb-10'>
            {/* <AddSightingButton /> */}
        </div>
        </>
     );
}
 
export default SightingsList