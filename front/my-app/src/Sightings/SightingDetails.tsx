import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";
import { fetchSightingInfo } from "../fetch-data/services/sightingService";
import { useFetch } from "../fetch-data/useFetch";
import { SightingDetails, SightingInfoData } from "../model/SightingInterface";
import MapBanner from "../utils/MapBanner";
import SightingDetailsComments from "./SightingDetailsComments";
import SightingDetailsInfo from "./SightingDetailsInfo";

 
const SightingDetailsComp: React.FunctionComponent = () => {
    const { id } = useParams<{id:string}>();
    const [data, isPending, error] = useFetch<SightingInfoData>(fetchSightingInfo,`sightings/${id}`)
    const [sighting, setSighting] = useState<SightingDetails | null>(null);

    useEffect(() => {
        if (data) {
            setSighting(data.sighting);
        }
    }, [data])

    const increaseCommentNum = () => {
        setSighting( prevState => {
            return {...prevState!, comments_count:prevState!.comments_count + 1}
        })
    }

    return ( 
        <>
            <MapBanner longitude={-1} latitude={-1} />
            {!isPending && !error && sighting &&
            <>
                <SightingDetailsInfo sighting={sighting} />
                <SightingDetailsComments id={id} flowerName={sighting.flower.name} increaseCommentNum={increaseCommentNum}/>
            </>
            }
        </>
     );
}
 
export default SightingDetailsComp;
